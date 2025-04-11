import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent,HeaderComponent,SideNavComponent,LastFewTransactionsComponent,SalesByCategoryComponent,SalesByMonthComponent,TopThreeProductsComponent,TopWidgetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
