import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { products } from '../../assets/formatted_processed_data';


export interface Product {
  category: string;
  name: string;
  price: number;
  number: number;
  weight: string;
  imgpath: string;
}



@Component({
  selector: 'app-main-shop-page',
  templateUrl: './main-shop-page.component.html',
  styleUrls: ['./main-shop-page.component.css']
})


export class MainShopPageComponent {
  
  products: Record<string, Product> = products; // This will hold all your products
  currentPage: number = 1;
  itemsPerPage: number = 8;
  displayedProducts: Product[] = [];
  allProducts: Product[] = Object.values(products);
 

  constructor(
    private router: Router,
    private renderer: Renderer2, 
    private el: ElementRef,
    private route: ActivatedRoute  // <-- Inject ActivatedRoute here
  ) {}

  get totalPages(): number {
    return Math.ceil(Object.values(this.products).length / this.itemsPerPage);
  }

  setPage(page: number): void {
    this.currentPage = page;
    const allProductsArray = Object.values(this.products);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.displayedProducts = allProductsArray.slice(start, end);
  }
  

  navigateToSingleProduct(divId: number) {
    this.router.navigate(['/singleshop'], { queryParams: { divId: divId } });
  }




  ngOnInit(): void {
    this.setPage(this.currentPage);
    
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'];
      if (filter) {
        const event = {
          target: {
            value: filter
          }
        };
        this.filterProducts(event);
      }
    });
  }

  updateDisplayedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.displayedProducts = this.allProducts.slice(start, end);
  }

  filterProducts(event: any) {
    const selectedValue = event.target.value;
  
    if (selectedValue === 'all') {
      this.allProducts = Object.values(products);
    } else {
      this.allProducts = Object.values(products).filter(product => product.category === selectedValue);
    }
  
    this.currentPage = 1;  // Reset current page
    this.updateDisplayedProducts();  // Update displayed products based on the new filter
  }
}
