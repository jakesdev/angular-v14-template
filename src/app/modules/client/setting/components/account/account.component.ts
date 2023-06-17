import { Component } from '@angular/core';
import { finalize, forkJoin } from 'rxjs';
import { UserProfileModel } from '../../../../../shared/models';

@Component({
  selector: 'app-setting-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class SettingAccountComponent {
  userProfile!: UserProfileModel | null;

  userUrl!: string;

  fileLogo: any;

  imageUrl: any = '';

  constructor(
    // private authService: AuthService,
  ) {
  }
  ngOnInit(): void {
    // this.loaderService.loading$.next(true);
    // forkJoin([this.getUserProfile(), this.getCurrentPlan()]).pipe(
    //   finalize(() => {
    //     this.loaderService.loading$.next(false);
    //   }
    //   )
    // ).subscribe(
    //   (res) => {
    //     this.userProfile = res[0];
    //     this.currentPlan = res[1].data;
    //     this.userUrl = res[0].url;
    //     console.log(res);
    //   }
    // );
  }

  getUserProfile() {
    // return this.authService.me();
  }

  uploadFile($event: any) {
    this.fileLogo = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileLogo);
  }

  handleFileInput(e: any) {
    this.fileLogo = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileLogo);
  }

  save() {
    // this.loaderService.loading$.next(true);
    // const formData = new FormData();
    // formData.append('file', this.fileLogo);
    // formData.append('url', this.userUrl);
    // this.authService.updateProfile(formData).pipe(
    //   finalize(() => {
    //     this.loaderService.loading$.next(false);
    //   }
    //   )
    // ).subscribe((res: any) => {
    //   if (res) {
    //     this.userProfile = res.data;
    //   }
    // }
    // );
  }
}
