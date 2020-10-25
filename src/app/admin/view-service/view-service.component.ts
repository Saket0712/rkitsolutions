import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { AdminLoginService } from 'src/app/services/adminLogin/admin-login.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {
  serviceForm:FormGroup
  serviceArr;
  title;
  imageArr;
  content;
  constructor(private router:Router, private login:AdminLoginService, private fb:FormBuilder) { }

  ngOnInit(): void {

    // this.serviceForm=this.fb.group({
    //   title:[''],
    //   content: [''],
    //   imageArr:[''],
    // })
    this.getAllBlogs()
  }

  async getAllBlogs(){
    const res:any = await this.login.getAllBlogs();
    if(res.success) {
      this.serviceArr=res.data
      console.log(this.serviceArr)
    
    }
    else{
      alert(res.message)
    }
  }

  async Delete(id){
    const res:any = await this.login.Delete(id)
       if (res.success) {
     
        Swal.fire({
          icon:'success',
          text:'Data deleted successfully'
        })
      this.ngOnInit();
    }
    else {
      alert(res.message)
    }
  }


}
