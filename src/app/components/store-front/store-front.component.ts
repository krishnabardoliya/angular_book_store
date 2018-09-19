import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Product } from "app/models/product.model";
import { ShoppingCart } from "app/models/shopping-cart.model";
import { ProductsDataService } from "app/services/products.service";
import { ShoppingCartService } from "app/services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-store-front",
  styleUrls: ["./store-front.component.scss"],
  templateUrl: "./store-front.component.html"
})
export class StoreFrontComponent implements OnInit {
  public products: Observable<Product[]>;
  public data;
  lifeGoals: string = '';

  public constructor(private router: Router,private productsService: ProductsDataService,
    private shoppingCartService: ShoppingCartService) {
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.productId === product.id));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

  public ngOnInit(): void {

    if(window.localStorage.getItem('TOKEN_KEY') === null) {
      this.router.navigate(['login']);
    } 
    this.products = this.productsService.all();
    // console.log('this.products--->>>', this.products);
    // console.log(this.productsService)
  }

  searchData(value) {
    // console.log('search data-->>', value);
}

showField(name) {
  if(name.toLowerCase().match(this.lifeGoals.toLowerCase())  ) {
      return true; 
  }
  else {
    return false;
  }
  
}

logout(){
  // console.log("logout");
  window.localStorage.removeItem('TOKEN_KEY');
  this.router.navigate(['login']);
}

}
