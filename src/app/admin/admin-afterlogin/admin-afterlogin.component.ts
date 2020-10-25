import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AdminLoginService } from 'src/app/services/adminLogin/admin-login.service';

@Component({
  selector: 'app-admin-afterlogin',
  templateUrl: './admin-afterlogin.component.html',
  styleUrls: ['./admin-afterlogin.component.css']
})
export class AdminAfterloginComponent implements OnInit {
  sideBarToggleBool;

  constructor(private login: AdminLoginService, private router:Router) { }

  ngOnInit(): void {
  }

  async logout(){
    this.login.removeJwt()
  
    this.router.navigateByUrl('/adminLogin');
  }

  toggleSideBar() {
    this.sideBarToggleBool = !this.sideBarToggleBool;
    console.log(this.sideBarToggleBool)
}

async openSidebar() {
  let navs = document.getElementById('accordionSidebarContainer');
  let docu = document.getElementById('wrapper');
  let toggleBut = document.getElementById('toggleButton');
  if (navs.classList.contains('navbarShow')) {
      navs.classList.remove('navbarShow')
      docu.classList.remove('widthChange')
      toggleBut.classList.remove('marginAdd')

  }
  else {
      navs.classList.add('navbarShow')
      docu.classList.add('widthChange')
      toggleBut.classList.add('marginAdd')
  }

}

async closeSidebar() {
  let navs = document.getElementById('accordionSidebarContainer');
  let docu = document.getElementById('wrapper');
  let toggleBut = document.getElementById('toggleButton');

  navs.classList.remove('navbarShow')
  docu.classList.remove('widthChange')
  toggleBut.classList.remove('marginAdd')

}


}
