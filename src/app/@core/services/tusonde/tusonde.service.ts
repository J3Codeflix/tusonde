import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ArrayResult } from "../../models/array-result/array-result.model";
import { Tusonde } from "../../models/tusonde/tusonde.model";
import { AuthService } from "../auth/auth.service";

@Injectable({ 
    providedIn: 'root' 
})
export class TusondeService {
    private tusondes: ArrayResult<Tusonde[]> = null;
    
    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) {
    }

    async getAll(): Promise<Tusonde[]> {
        try {
            const userProfile = await this.authService.getUserProfile();
            const headers = await this.authService.getAuthHeaders();
            const url = `${environment.apiUrl}/tusonde/per-user/${userProfile.user.ID}`;
            this.tusondes = await this.http.get(url, headers).toPromise() as ArrayResult<Tusonde[]>;
            return this.tusondes.Items;
        } catch (error) {
            throw error;
        }
    }

    async getOne(id: string): Promise<Tusonde> {
        try {
            return this.tusondes.Items.find(tusonde => tusonde.ID === id);
        } catch (error) {
            throw error;
        }
    }
}
