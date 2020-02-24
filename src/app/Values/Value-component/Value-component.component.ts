
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-Value-component',
  templateUrl: './Value-component.component.html',
  styleUrls: ['./Value-component.component.css']
})
export class ValueComponentComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }


getValue() {
  this.http.get('https://localhost:44360/api/values/').subscribe(response => {
      this.values = response;
  }, error => { console.log(error); });
}

}
