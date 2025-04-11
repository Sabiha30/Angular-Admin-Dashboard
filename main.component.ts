import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { LastFewTransactionsComponent } from '../last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from '../sales-by-month/sales-by-month.component';
import { TopThreeProductsComponent } from '../top-three-products/top-three-products.component';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';

@Component({
  selector: 'app-main',
  standalone: true,
   imports: [MainComponent,HeaderComponent,SideNavComponent,LastFewTransactionsComponent,SalesByCategoryComponent,SalesByMonthComponent,TopThreeProductsComponent,TopWidgetsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
