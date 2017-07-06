import { Component, OnInit } from '@angular/core';
import { Company } from './../company';
import { Industry } from './../industry';
import { CompanyService } from "./../company.service";
import { IndustryService } from "./../industry.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {
  companies: Array<Company>;
  industries: Array<Industry>;
  selectedCompany: Company;

  private hiddenewCompany: boolean = true;

  constructor(private _companyService: CompanyService,
              private _industryService: IndustryService) { }

  ngOnInit() {
    this._companyService.getCompanies()
      .subscribe((resCompanies) => this.companies = resCompanies);

    this._industryService.getIndustries()
      .subscribe((resIndustries) => this.industries = resIndustries);  

    console.log(this.industries);
  }

  onSelectCompany(company: any){
    this.selectedCompany = company;
  }

  onSubmitAddCompany(company: Company){
    this._companyService.addCompany(company)
      .subscribe(resNewCompany => {
        this.companies.push(resNewCompany);
        this.hiddenewCompany = true;
        this.selectedCompany = resNewCompany;
      })
  }

  onUpdateCompanyEvent(company: Company){
    this._companyService.updateCompany(company, company.id)
        .subscribe(resUpdatedCompany => company = resUpdatedCompany);
     this.selectedCompany = null;
  }

  onDeleteCompanyEvent(company: Company){
            const position = this.companies.findIndex(
               (companyEl: Company) => {
                 return companyEl.id == company.id;
               }
            );
     this.companies.splice(position, 1);
     this.selectedCompany = null;
  }

  newOrCancelCompany(){
    this.hiddenewCompany = !this.hiddenewCompany;
  }

}
