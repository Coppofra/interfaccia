import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import type { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, RouterModule, ProductCardComponent],
  template: `
    <h2>Prodotti</h2>
    <div class="controls">
      <input type="search" placeholder="Cerca prodotti..." (input)="setQuery($any($event.target).value)" />
      <select (change)="setCategory($any($event.target).value)">
        <option value="">Tutte le categorie</option>
        <option *ngFor="let c of categories" [value]="c">{{c}}</option>
      </select>
    </div>

    <div class="card-grid" role="list">
      <app-product-card *ngFor="let p of filtered()" [product]="p"></app-product-card>
    </div>
  `
})
export class ProductsComponent {
  private products = signal<Product[]>(ProductService.getAll());
  query = signal('');
  category = signal('');
  categories = ProductService.categories();

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const cat = this.category();
    return this.products().filter(p =>
      (cat ? p.category === cat : true) &&
      (q ? (p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q)) : true)
    );
  });

  setQuery(v: string) { this.query.set(v || ''); }
  setCategory(v: string) { this.category.set(v || ''); }
}
