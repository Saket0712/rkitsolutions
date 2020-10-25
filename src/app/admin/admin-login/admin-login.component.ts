import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AdminLoginService } from 'src/app/services/adminLogin/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private login:AdminLoginService, private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  async Login(){
    const res:any = await this.login.Login(this.loginForm.value)
    if(res.success){
    // alert(res.message)
    Swal.fire({
      icon: 'success',
      // title: 'Logged In Successfully',
      text: res.message,
    })
    this.router.navigateByUrl('/adminDashboard')
  }
  else{
    // alert(res.message)
    Swal.fire({
      icon: 'error',
      // title: 'Logged In Successfully',
      text: res.message,
    })
  }
  }

}
