import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isClicked = false;
  public loginData;
  constructor() { }

  ngOnInit(): void {
    this.loginData = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      rememberMe: new FormControl("")  
    });  
  }
  get username(){
    return this.loginData.get('username');
  }

  get password(){
    return this.loginData.get('password');
  }

  submit(data){
    this.isClicked = true;
    const logindata = {
      username : data.value.username,
      password: data.value.password,
      rememberMe: data.value.rememberMe
    }
    console.log(logindata);   
}


}
