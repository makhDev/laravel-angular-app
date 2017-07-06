import { Component, OnInit } from '@angular/core';
import { Industry } from './../industry';
import { IndustryService } from "./../industry.service";

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css'],
  providers: [IndustryService]
})
export class IndustriesComponent implements OnInit {
  industries: Array<Industry>;
  selectedIndustry: Industry;

  private hiddenewIndustry: boolean = true;

  constructor(private _industryService: IndustryService) { }

  ngOnInit() {
  	this._industryService.getIndustries()
  	  .subscribe(resIndustries => this.industries = resIndustries);
  }

  onSelectIndustry(industry: any){
    this.selectedIndustry = industry;
  }

  onSubmitAddIndustry(industry: Industry){
    this._industryService.addIndustry(industry)
      .subscribe(resNewIndustry => {
        this.industries.push(resNewIndustry);
        this.hiddenewIndustry = true;
        this.selectedIndustry = resNewIndustry;
      })
  }

  onUpdateIndustryEvent(industry: Industry){
    this._industryService.updateIndustry(industry, industry.id)
        .subscribe(resUpdatedIndustry => industry = resUpdatedIndustry);
     this.selectedIndustry = null;
  }

  onDeleteIndustryEvent(industry: Industry){
            const position = this.industries.findIndex(
               (industryEl: Industry) => {
                 return industryEl.id == industry.id;
               }
            );
     this.industries.splice(position, 1);
     this.selectedIndustry = null;
  }

  newOrCancelIndustry(){
    this.hiddenewIndustry = !this.hiddenewIndustry;
  }

}
