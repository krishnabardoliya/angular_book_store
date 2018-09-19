import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: StoreFrontComponent,
                path: "storefront"
            },
            {
                component: LoginComponent,
                path: "login"
            },
            {
                component: RegistrationComponent,
                path: "registration"
            },
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: '**', redirectTo: '/login' }
        ])
    ]
})
export class AppRoutingModule { }
