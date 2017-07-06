import { Component, OnInit, EventEmitter } from '@angular/core';
import { Company } from './../company';

@Component({
  selector: 'app-rightbar2',
  templateUrl: './rightbar2.component.html',
  styleUrls: ['./rightbar2.component.scss'],
  inputs: ['companies'],
  outputs: ['SelectCompany']
})
export class Rightbar2Component implements OnInit {

  public SelectCompany = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  onSelect(comp: Company){
  	this.SelectCompany.emit(comp);
  }

}
