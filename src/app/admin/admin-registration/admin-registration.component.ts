import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { AdminLoginService } from 'src/app/services/adminLogin/admin-login.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  registForm: FormGroup

  constructor(private login:AdminLoginService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registForm = this.fb.group({
      name: [""],
      email: [""],
      password: [""],
      phone: [""]
    })
  }

 async Registration(){
   const res:any = await this.login.Registration(this.registForm.value)
   if(res.success){
    Swal.fire({
      icon: 'success',
      // title: 'Logged In Successfully',
      text: res.message,
    })
   }
   else{
    Swal.fire({
      icon: 'error',
      // title: 'Logged In Successfully',
      text: res.message,
    })
   }
 }

}
