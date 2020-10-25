import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginService } from '../services/adminLogin/admin-login.service';




@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {



  serviceId;
  allData

constructor(private route: ActivatedRoute, private router:Router, private login:AdminLoginService) { }



ngOnInit(): void {

  this.route.params.subscribe(paramsId => {
    this.serviceId = paramsId.id;


  });
  // console.log(this.serviceId)

  this.getSpecific()

}

  async getSpecific(){
    const res:any = await this.login.getSpecific(this.serviceId)
    if(res.success){
      this.allData = res.data
      // console.log(this.allData)
    }
    else{
      alert(res.message)
    }
  }


}
