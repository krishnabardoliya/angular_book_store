import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { }
  model: any= {username:'',
  password:''};

  ngOnInit() {
    // console.log("token",window.localStorage.getItem('TOKEN_KEY'))
    if(window.localStorage.getItem('TOKEN_KEY') !== null) {
      this.router.navigate(['storefront']);
    } 
  }

  login() {
    // console.log(this.model)
    if(this.model.username === "aneri" && this.model.password === "password") {
      localStorage.setItem('TOKEN_KEY','sdsfsf');
      this.router.navigate(['storefront']);
    }
  }

}
