import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminLoginService } from '../services/adminLogin/admin-login.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  constructor(private login:AdminLoginService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      query:['', Validators.required]

    })
  }

  async Addcontact(){

    const res:any = await this.login.Addcontact(this.contactForm.value)
    if(res.success){
      Swal.fire({
        icon:'success',
        text:res.message,
      })
      this.ngOnInit();
    }
    else{
      alert(res.message)
    }

  }

}
