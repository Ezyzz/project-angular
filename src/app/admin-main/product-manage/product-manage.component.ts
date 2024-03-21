import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { companys } from '../../data/company-data';
import { CompanyModel } from '../../models/company-model';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent {

  Companys: CompanyModel[] = companys;

  constructor(private router: Router, private route: ActivatedRoute) {}

  toggleSwitch(company: CompanyModel) {
    company.switch = !company.switch; // Toggle the switch value
  }

  viewCompanyDetail(productId: number) {
    this.router.navigate(['/main/product', productId]);
  }
}
