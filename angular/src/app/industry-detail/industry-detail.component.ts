import { Component, OnInit, EventEmitter } from '@angular/core';
import { Industry } from '../industry';
import { IndustryService } from '../industry.service';

@Component({
  selector: 'app-industry-detail',
  templateUrl: './industry-detail.component.html',
  styleUrls: ['./industry-detail.component.css'],
  inputs: ['industry'],
  outputs: ['updateIndustryEvent', 'deleteIndustryEvent']
})
export class IndustryDetailComponent implements OnInit {
  
  private editIndustry: boolean =false;
  private updateIndustryEvent = new EventEmitter();
  private deleteIndustryEvent = new EventEmitter(); 
  industry: Industry;

  constructor(private _industryService: IndustryService) { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.editIndustry = false;
  }

  onIndustryClick(){
  	this.editIndustry = true;
  }

  updateIndustry(){
  	this.updateIndustryEvent.emit(this.industry);
  }

  deleteIndustry(){
    this._industryService.deleteIndustry(this.industry.id)
    .subscribe(()=>{
      this.deleteIndustryEvent.emit(this.industry);
    });
  }

}
