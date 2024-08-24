import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience:any
  collapseBool:boolean=false;
  CurrentEmpDisabled:boolean=false

  workExperienceEdit=this.fb.group({
    workExperienceArray:this.fb.array([])
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.workExperience);
    // workExperience: this.fb.group({
    //   CompanyName: ['', Validators.required],
    //   CurrentEmployer: ['', Validators.required],
    //   FromDate: ['', Validators.required],
    //   ToDate:['', Validators.required],
    // })
    
  }

  getControls(){
    return (this.workExperienceEdit.controls['workExperienceArray'] as FormArray).controls
    // return (this.workExperienceEdit.get('workExperienceArray') as FormArray).controls
  }

  CheckboxChange(checkBox:any){
    console.log(checkBox) 
    if(checkBox){
      this.CurrentEmpDisabled=true
    }
    else{
      this.CurrentEmpDisabled=false
    }
  }

  addWorkExperience(){
    console.log("workExp", this.workExperience.value);
    let workExpObj={
      "CompanyName":"",
      "CurrentEmp":"",
      "FromDate":"",
      "ToDate":"",
    }
    let WorkArray=this.workExperienceEdit.controls['workExperienceArray'] as FormArray;
    console.log(this.workExperience.valid,"work ar");
    
    if(this.workExperience.valid){
      console.log(this.workExperience.valid,"work ar");
      WorkArray.push(this.fb.group({
        CompanyName: [this.workExperience.value.CompanyName, Validators.required],
        Designation:[this.workExperience.value.Designation,Validators.required],
        CurrentEmployer: [this.workExperience.value.CurrentEmployer],
        FromDate: [this.workExperience.value.FromDate, Validators.required],
        ToDate:[this.workExperience.value.ToDate, Validators.required],
      }));
      this.workExperience.reset();
    }
    else{
      alert("Please fill details")
    }
    
  }

  CollapseWorkExp(){
    var element= document.getElementById("workExpButton");
    var element1= document.getElementById("collapseOne");
    this.collapseBool != this.collapseBool
    if(this.collapseBool){
      element1?.classList.add("show")
      element?.classList.add("collapsed")
      this.collapseBool=false
    }
    else{
      element?.classList.remove("collapsed")
      element1?.classList.remove("show")
      // element1?.classList.add("hide")

      this.collapseBool=true
      // element1?.classList.remove("show")
    }     
  }
  
}
