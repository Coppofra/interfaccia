import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-reviews',
  imports: [CommonModule],
  template: `
    <h2>Recensioni</h2>
    <p>Articoli e recensioni dettagliate.</p>
    <div class="card-grid">
      <article class="card">
        <img src="https://picsum.photos/seed/r1/400/250" alt="recensione iPhone 15">
        <strong>Recensione: Apple iPhone 15</strong>
        <div class="meta">Analisi approfondita della fotocamera e della batteria dell'iPhone 15.</div>
      </article>
      <article class="card">
        <img src="https://picsum.photos/seed/r2/400/250" alt="recensione MacBook Air M2">
        <strong>Recensione: Apple MacBook Air (M2)</strong>
        <div class="meta">Performance, autonomia e valore del MacBook Air con chip M2.</div>
      </article>
    </div>
  `
})
export class ReviewsComponent {}
