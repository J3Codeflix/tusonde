import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Tusonde } from '../@core/models/tusonde/tusonde.model';
import { AuthService } from '../@core/services/auth/auth.service';
import { ToastService } from '../@core/services/toast/toast.service';
import { TusondeService } from '../@core/services/tusonde/tusonde.service';

@Component({
  selector: 'app-new-tusonde',
  templateUrl: './new-tusonde.page.html',
  styleUrls: ['./new-tusonde.page.scss'],
})
export class NewTusondePage implements OnInit {
  image: string;

  form = {
    title: null,
    description: null,
    goal: null,
    image: null,
    endDate: null,
    category: null,
    categories: []
  };

  isLoading = false;
  minDate: string;

  constructor(
    private storage: AngularFireStorage,
    private authService: AuthService,
    private tusondeService: TusondeService,
    private toastService: ToastService,
  ) {
    const minDate = new Date();
    const currentDay = minDate.getDate();
    minDate.setDate(currentDay + 10);
    this.minDate = `${minDate.getFullYear()}-${minDate.getMonth()}-${minDate.getDate()}`;
  }

  ngOnInit() {
  }

  resetForm() {
    this.form = {
      title: null,
      description: null,
      goal: null,
      image: null,
      endDate: null,
      category: null,
      categories: []
    };
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event:any) => {
        this.image = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);  // to trigger onload
    }
    
    let fileList: FileList = event.target.files;  
    let file: File = fileList[0];
    this.form.image = file;
  }

  addCategory() {
    if (this.form.category) {
      this.form.categories.push(this.form.category);
      this.form.category = null;
    }
  }

  removeCategory(index: number) {
    this.form.categories.splice(index, 1);
  }

  async submit() {
    try {
      this.isLoading = true;

      const filePath = Date.now().toString();
      const task = await this.storage.upload(`tusonde/${filePath}`, this.form.image);
      const imageUrl = await task.ref.getDownloadURL();
      this.isLoading = false;
      
      const userProfile = await this.authService.getUserProfile();

      const tusonde: Tusonde = {
        userId: userProfile.user.ID,
        creator: userProfile.user.fullName,
        image: imageUrl,
        endDate: this.form.endDate,
        categories: this.form.categories,
        raisedAmount: 0,
        goal: this.form.goal,
        description: this.form.description,
        title: this.form.title,
      };

      const result = await this.tusondeService.submitNewTusonde(tusonde);
      if (result) {
        this.resetForm();
        await this.toastService.show('Submitted New Tusonde successfully.');
      }
    } catch (error) {
      console.error('🚀 ~ file: new-tusonde.page.ts ~ line 53 ~ NewTusondePage ~ submit ~ error', error);
    }
  }
}
