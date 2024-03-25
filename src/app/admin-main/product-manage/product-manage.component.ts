import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { companys } from '../../data/company-data';
import { CompanyModel } from '../../models/company-model';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {

  Companys: CompanyModel[] = companys;
  
  showFooter: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Detect scroll position
    const yOffset = window.pageYOffset;
    const scrollTopThreshold = 100; // Adjust this threshold as needed

    // Show/hide footer based on scroll position
    this.showFooter = yOffset > scrollTopThreshold;
  }

  createNewCompany() {
    const newCompanyId = this.Companys.length + 1; // Generate a unique ID for the new company
    const newCompany: CompanyModel = { id: newCompanyId, name: 'New Product ' + newCompanyId, switch: true }; // Create a new company object
    this.Companys.push(newCompany); // Add the new company to the Companys array
  }

  toggleSwitch(company: CompanyModel) {
    company.switch = !company.switch; // Toggle the switch value
  }

  viewCompanyDetail(productId: number) {
    this.router.navigate(['/main/product', productId]);
  }
}
