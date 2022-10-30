import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { RegisterModel } from './../models/RegisterModel';
import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public isClicked = false;
  public isError = false;
  public isPasserror = false;
  public signupData;
  public submitted:boolean = false;
  ResponseTitle: any;
  constructor(private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService,
    private route:Router) {
    this.signupData = this.formBuilder.group({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      confirmPassword: new FormControl("",[Validators.required])
    },
    {
      validators: this.MustMatch('password','confirmPassword')
    }); 
   }

  ngOnInit(): void {
      
  }

  
  submit(data){
    this.isClicked = true;
    if(this.signupData.invalid){
      this.isError=true
      document.getElementById("error-div").classList.add("wow fadeInRight")
      return;
    }

    const signdata:RegisterModel = {
      firstName: data.value.firstName,
      lastName: data.value.lastName,
      phone: data.value.phone,
      email : data.value.email,
      password: data.value.password,
      confirmPassword: data.value.confirmPassword      
    }
    console.log(signdata);
    this.submitted = true;
    this.authenticationService.Register(signdata)
    .subscribe(data=>{
        console.log(data)
        this.route.navigateByUrl("/portal")
    },
    (error:HttpErrorResponse)=>{
      console.error(error.error)
      this.ResponseTitle=error.error.title;
      // this.UsernameErrorMessage= error.error.errors.Username;
      // this.PasswordErrorMessage= error.error.errors.Password;
    });

    // this.authenticationService.Register(signdata)
    // .subscribe(data=>{
    //   console.log(data);
    // },
    // (error:HttpErrorResponse)=>{
    //   console.error(error.error)
    // })
  
    
  }

  onPasswordchange(){
    var pass = this.signupData.get('password');
    var confirmPass = this.signupData.get('confirmPassword');
    if(pass != confirmPass){
        this.isPasserror = true;
    }
    else{
      this.isPasserror = false;
    }
  }

  get firstName(){
    return this.signupData.get('firstName');
  }
  get lastName(){
    return this.signupData.get('lastName');
  }
  get phone(){
    return this.signupData.get('phone');
  }
  get email(){
    return this.signupData.get('email');
  }
  get password(){
    return this.signupData.get('password')
  }
  get confirmPassword(){
    return this.signupData.get('confirmPassword');
  }


  checkpasswords:ValidatorFn = (group:AbstractControl): ValidationErrors | null =>{
    let pass = group.get('password').value;
    let confirmPass = group.get("confirmPassword").value;
    return pass === confirmPass ? null : {notSame: true}
  }

  public static matchValues(
    matchTo: string
  ):(AbstractControl)=>ValidationErrors | null {
    return (control:AbstractControl):ValidationErrors | null => {
      return !!control.parent && 
      !!control.parent.value && 
      control.value === control.parent.controls[matchTo].matchValues
      ? null
      : {isMatching: false};
    }
  }

  MustMatch(controlName:string,macthingControlName: string){
    return (formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[macthingControlName];
      if(matchingControl.errors &&  ! matchingControl.errors.MustMatch){
        return
      }
      if(control.value != matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }
}


  
  

