import { Component, OnInit, EventEmitter } from '@angular/core';
import { Industry } from './../industry';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss'],
  inputs: ['industries'],
  outputs: ['SelectIndustry']
})
export class RightbarComponent implements OnInit {

  public SelectIndustry = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  onSelect(ind: Industry){
  	this.SelectIndustry.emit(ind);
  }

}
