import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="slider" aria-roledescription="carousel">
        <div class="slides" [style.transform]="'translateX(' + (-active()*100) + '%)'">
          <div class="slide" *ngFor="let s of slides">
            <div>
              <h2 style="margin:0 0 .5rem">{{ s.title }}</h2>
              <p style="margin:0;color:var(--muted)">{{ s.subtitle }}</p>
            </div>
            <img *ngIf="s.img" [src]="s.img" alt="" style="height:140px;margin-left:1rem;border-radius:.4rem" />
          </div>
        </div>
        <div class="controls">
          <button (click)="prev()" aria-label="Prev">&#10094;</button>
          <button style="right:8px" (click)="next()" aria-label="Next">&#10095;</button>
        </div>
      </div>
    </section>

    <section>
      <h3>In evidenza</h3>
      <div class="card-grid" role="list">
        <a class="card" *ngFor="let p of featured" [routerLink]="['/products', p.id]" role="listitem">
          <img [src]="p.image" alt="{{p.title}}" />
          <strong>{{p.title}}</strong>
          <div class="meta">{{p.short}}</div>
          <div class="meta">€{{p.price}}</div>
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {
  slides = [
    { title: 'Novità smartphone', subtitle: 'Recensioni, news e confronti', img: ProductService.getAll()[0].image },
    { title: 'Notebook per professionisti', subtitle: 'Selezioni e approfondimenti', img: ProductService.getAll()[1].image },
    { title: 'Gadget utili', subtitle: 'Scegli il migliore per te', img: ProductService.getAll()[2].image }
  ];
  active = signal(0);
  featured = ProductService.getAll().slice(0,3);

  next() { this.active.set((this.active() + 1) % this.slides.length); }
  prev() { this.active.set((this.active() - 1 + this.slides.length) % this.slides.length); }
}
