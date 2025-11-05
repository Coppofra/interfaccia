import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { Product } from '../../models/product';

@Component({
  standalone: true,
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule],
  template: `
    <a class="card product-card" [routerLink]="['/products', product.id]" role="listitem" aria-label="{{product.title}}">
      <img [src]="product.image" [alt]="product.title" />
      <div>
        <strong>{{ product.title }}</strong>
        <div class="meta">{{ product.short }}</div>
      </div>
      <div style="margin-top:auto;font-weight:700">€{{ product.price }}</div>
    </a>
  `,
  styles: [`
    :host{display:block}
    .product-card{
      display:flex;flex-direction:column;gap:.6rem;text-decoration:none;color:inherit;height:100%;
      padding:1rem;border-radius:10px;background:var(--card-bg);transition:transform .18s,box-shadow .18s;
      border:1px solid rgba(11,18,30,0.02);
    }
    .product-card img{width:100%;height:150px;object-fit:cover;border-radius:8px}
    .product-card:hover{transform:translateY(-6px);box-shadow:0 18px 50px rgba(11,18,30,0.06)}
    .product-card .meta{color:var(--text-soft);font-size:.92rem;margin-top:.35rem}
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
}
