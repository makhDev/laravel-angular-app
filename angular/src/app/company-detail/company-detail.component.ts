import { Component, OnInit, EventEmitter } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  inputs: ['company'],
  outputs: ['updateCompanyEvent', 'deleteCompanyEvent']
})
export class CompanyDetailComponent implements OnInit {
  
  private editCompany: boolean =false;
  private updateCompanyEvent = new EventEmitter();
  private deleteCompanyEvent = new EventEmitter(); 
  company: Company;

  constructor(private _companyService: CompanyService) { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.editCompany = false;
  }

  onCompanyClick(){
  	this.editCompany = true;
  }

  updateCompany(){
  	this.updateCompanyEvent.emit(this.company);
  }

  deleteCompany(){
    this._companyService.deleteCompany(this.company.id)
    .subscribe(()=>{
      this.deleteCompanyEvent.emit(this.company);
    });
  }

}
