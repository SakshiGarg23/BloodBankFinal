import { Component , OnInit } from '@angular/core';
import { BloodBank } from './app.model';
import { blood } from './app.model';
import { template } from '@angular/core/src/render3';
import { NG_ELEMENT_ID } from '@angular/core/src/render3/fields';
import { componentFactoryName } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BloodBank';
  BloodBankModel : BloodBank = new BloodBank();
  blood:blood[];
  ngOnInit()
  {  this.blood = [
     {bloodgroup:"A+"},
     {bloodgroup:"B+"},
     {bloodgroup:"O+"},
     {bloodgroup:"AB+"},
     {bloodgroup:"A-"},
     {bloodgroup:"B-"},
     {bloodgroup:"O-"},
     {bloodgroup:"AB-"},

  ];
  }
  /*ngOnSelect()
  {
    this.
  }*/

}
