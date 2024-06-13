import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificateModel } from '../../models/authentificate.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  authform!:FormGroup;
  credentials :AuthentificateModel=new AuthentificateModel();

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.OncreateForm;

  }
  OncreateForm(){
    this.authform=this.fb.group({
      username:[null, [Validators.required]],
      password:[null, [Validators.required]]
    });


  }
  Onsubmit(){

  }

}
