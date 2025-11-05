import { Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts';
import { HomeComponent } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ReviewsComponent } from './components/reviews/reviews';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];
