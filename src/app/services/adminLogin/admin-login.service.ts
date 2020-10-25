import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  url="https://backend-rkit.herokuapp.com"

  constructor(private http:HttpClient) { }

  async Login(formData){
    return this.http.post(`${this.url}/admin/Login`, formData).toPromise();
  }

  async Registration(formData){
  return this.http.post(`${this.url}/admin/Signup`, formData).toPromise();
  }

  async Onupload(formData){
    return this.http.post(`${this.url}/admin/addService`, formData).toPromise();
  }

  async getAllBlogs(){
    return this.http.get(`${this.url}/admin/getAllBlogs`).toPromise();
  }

  async Delete(id){
    return this.http.delete(`${this.url}/admin/Delete/${id}`).toPromise();
  }

  async Addcontact(formData){
    return this.http.post(`${this.url}/admin/query`, formData).toPromise();
  }

  async getSpecific(id){
    return this.http.get(`${this.url}/admin/getSpecific/${id}`).toPromise();
  }



  setJwt(token){
    localStorage.setItem("userToken", token)
  }

  removeJwt(){
    localStorage.removeItem("userToken")
  }

  getJwt(){
    let token= localStorage.getItem("userToken")
    if (token) {
      let payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    }

    else {
      return null
    }

  }

}
