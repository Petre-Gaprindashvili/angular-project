import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryId } from 'src/app/interfaces/category-id';
import { ServiceCategoriesService } from 'src/app/services/service-categories.service';
// import { EachProductService } from 'src/app/services/each-product.service';

@Component({
  selector: 'app-proudcts-info',
  templateUrl: './proudcts-info.component.html',
  styleUrls: ['./proudcts-info.component.css']
})
export class ProudctsInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private eachinfo:ServiceCategoriesService){}

prodid: null|number =null
detailsofproduct: CategoryId |undefined = undefined
ngOnInit(): void {
this.prodid = this.route.snapshot.params['id'];
const currentIndex = this.eachinfo.productlist.find((prodd)=> prodd.id === this.prodid);
console.log(currentIndex)
}
}
