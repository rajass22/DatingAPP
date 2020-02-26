import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_Service/AuthService.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  Login()
  {
     this.authService.Login(this.model).subscribe(Response => {console.log('Logged Success') } 
     , error => { console.log('Not logged in'); });
  }
}
