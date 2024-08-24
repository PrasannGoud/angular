import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    EmailId:['', Validators.required],
    workExperience: this.fb.group({
      CompanyName: ['', Validators.required],
      CurrentEmployer: [''],
      Designation:['', Validators.required],
      FromDate: ['', Validators.required],
      ToDate:['', Validators.required],
    })
  });

  fileToUpload: any;
  imageUrl: any;
  display= new FormControl("", Validators.required);


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  
  handleFileInput(file:any) {
    this.fileToUpload = file.item(0);
    this.display.patchValue(`${this.fileToUpload.name}`);
    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  saveProfile(){
    console.log(this.profileForm.value);
    
    
  }

}
