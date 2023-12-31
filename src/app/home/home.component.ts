import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient){} 

  ngOnInit(): void {
    //http://localhost:1337/api/welcome?populate*
    this.http.get <any>('http://localhost:1337/api/welcome?populate*').subscribe (response => { 
      console.log(response);
      this.data = response;
      console.log('Data', this.data);
   })

}

}

