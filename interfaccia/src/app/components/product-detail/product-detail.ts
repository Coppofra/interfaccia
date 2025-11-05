import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import type { Product } from '../../models/product';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="product; else notfound">
      <div style="display:flex;gap:1rem;flex-wrap:wrap">
        <div style="flex:1 1 320px;min-width:280px">
          <div class="slider">
            <div class="slides" [style.transform]="'translateX(' + (-active()*100) + '%)'">
              <div class="slide" *ngFor="let img of product.images || [product.image]">
                <img [src]="img" alt="" style="max-width:100%;height:220px;object-fit:contain" />
              </div>
            </div>
            <div class="controls">
              <button (click)="prev()">&#10094;</button>
              <button style="right:8px" (click)="next()">&#10095;</button>
            </div>
          </div>
        </div>
        <div style="flex:1 1 320px">
          <h2>{{product.title}}</h2>
          <div class="meta">Categoria: {{product.category}} • €{{product.price}}</div>
          <p>{{product.description}}</p>
          <h4>Caratteristiche</h4>
          <ul>
            <li *ngFor="let f of product.features">{{f}}</li>
          </ul>
        </div>
      </div>
    </ng-container>
    <ng-template #notfound><p>Prodotto non trovato.</p></ng-template>
  `
})
export class ProductDetailComponent {
  product: Product | undefined;
  active = signal(0);
  constructor(route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id') || '';
    this.product = ProductService.getById(id);
  }
  next() { if (!this.product) return; this.active.set((this.active() + 1) % ((this.product.images?.length ?? 1))); }
  prev() { if (!this.product) return; this.active.set((this.active() - 1 + (this.product.images?.length ?? 1)) % ((this.product.images?.length ?? 1))); }
}
