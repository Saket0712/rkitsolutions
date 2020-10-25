import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { from } from 'rxjs';
import { Router } from '@angular/router'
import { AdminLoginService } from 'src/app/services/adminLogin/admin-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-service',
  templateUrl: './all-service.component.html',
  styleUrls: ['./all-service.component.css']
})
export class AllServiceComponent implements OnInit {

  serviceForm:FormGroup
  tempImageArr: any = [];
  displayArr: any = [];
  
  id;

  constructor(private fb:FormBuilder, private router:Router, private loign:AdminLoginService) { }

  ngOnInit(): void {
    this.id= this.loign. getJwt()
    this.serviceForm = this.fb.group({
      title:[''],
      imageArr:[''],

      comment:['']
    })
  }

  uploadImage(event) {

    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.tempImageArr.push(reader.result);
        this.displayArr.push(event.target.value.split(/(\\|\/)/g).pop());
        this.serviceForm.patchValue({
          imageArr: this.tempImageArr
        })
        // console.log(this.specificationForm.value);
      }
    }

  }

  deleteImage(i) {
    this.tempImageArr.splice(i, 1)
    this.displayArr.splice(i, 1)
    this.serviceForm.patchValue({
      imageArr: this.tempImageArr
    })
  }

  async OnUpload(){

    const res:any = await this.loign.Onupload(this.serviceForm.value);
    
    if(res.success){
      Swal.fire({
        icon:'success',
        text: res.message,
      })
    }
    else{
      Swal.fire({
        icon:'error',
        text: res.message,

      })
    }

  }

}
