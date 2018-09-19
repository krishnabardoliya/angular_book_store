import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {
  public constructor(private router: Router,private shoppingCartService: ShoppingCartService) {}

  public ngOnInit(): void {
    this.shoppingCartService.empty();
  }

  logout(){
    // console.log("logout");
    window.localStorage.removeItem('TOKEN_KEY');
    this.router.navigate(['login']);
  }
}
