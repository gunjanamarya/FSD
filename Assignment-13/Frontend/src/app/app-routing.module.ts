import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { HistoryComponent } from './components/history/history.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cart', component: CartComponent },
    { path: 'history', component: HistoryComponent },
    {
        path: '', redirectTo: '/login',
        pathMatch: 'full'
    },
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
