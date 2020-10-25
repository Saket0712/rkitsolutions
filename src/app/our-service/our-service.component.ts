import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { AdminLoginService } from 'src/app/services/adminLogin/admin-login.service';
import Swal from 'sweetalert2'


// import  *  as  data  from  '../mydata/data.json';
@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  serviceArr;
  title;
  imageArr;
  content;
  allData
  id
  modalId

constructor(private router:Router, private login:AdminLoginService, private fb:FormBuilder, private aRoute:ActivatedRoute) { }


  ngOnInit(): void {

    // this.aRoute.params.subscribe(paramsId => {
    //   this.id = paramsId.id;
    // });
    this.getAllBlogs()
    // this.getSpecific()


  }

  setModalId(id) {
    this.modalId = id;
    this.router.navigateByUrl(`/more/${id}`)
    // this.getSpecificTutor(id);
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

  // async getSpecific(){
  //   const res:any = await this.login.getSpecific(this.id)
  //   if(res.success){
  //     this.allData = res.data
  //     console.log(this.allData)
  //   }
  //   else{
  //     alert(res.message)
  //   }
  // }





}
