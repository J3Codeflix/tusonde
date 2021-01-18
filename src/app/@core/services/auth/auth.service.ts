import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

import { UserProfile } from '../../models/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
  ) { }

  async login(email: string, password: string): Promise<UserProfile> {
    try {
      const url = `${environment.apiUrl}/auth/login`;
      const userProfile = await this.httpClient.post(url, { email, password }).toPromise() as UserProfile;
      return await this.storage.set('userProfile', userProfile);
    } catch (error) {
      throw error;
    }
  }

  async getUserProfile(): Promise<UserProfile> {
    try {
      return await this.storage.get('userProfile') as UserProfile;
    } catch (error) {
      throw error;
    }
  }

  async getAuthHeaders(): Promise<{ headers: { Authorization: string } }> {
    try {
      const userProfile = await this.storage.get('userProfile') as UserProfile;
      return {
        headers: {
          Authorization: `Bearer ${userProfile.accessToken}`
        }
      };
    } catch (error) {
      throw error;
    }
  }
}
