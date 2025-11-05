import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [CommonModule, RouterModule],
  template: `
    <header class="site-header" role="banner" aria-label="Main header">
      <div class="container nav-inner">
        <a class="brand" routerLink="/" aria-label="TechWorld home"><span class="logo-dot"></span>TechWorld</a>

        <div class="nav-right">
          <form class="search-form" (submit)="onSearch($event)" role="search" aria-label="Cerca prodotti">
            <input type="search" placeholder="Cerca prodotti..." aria-label="Cerca" (input)="setQuery($any($event.target).value)" />
            <button type="submit" aria-label="Cerca" class="search-btn">🔍</button>
          </form>

          <button class="menu-toggle" (click)="toggle()" [attr.aria-expanded]="open()" aria-controls="main-nav" aria-label="Apri menu">
            <span class="bar" [class.bar-open]="open()"></span>
            <span class="bar" [class.bar-open]="open()"></span>
            <span class="bar" [class.bar-open]="open()"></span>
          </button>
        </div>

        <nav id="main-nav" class="main-nav" [class.open]="open()" aria-label="Navigazione principale">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="close()">Home</a>
          <a routerLink="/products" routerLinkActive="active" (click)="close()">Prodotti</a>
          <a routerLink="/reviews" routerLinkActive="active" (click)="close()">Recensioni</a>
          <a routerLink="/contacts" routerLinkActive="active" (click)="close()">Contatti</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    :host{display:block}
    .nav-inner{display:flex;align-items:center;gap:1rem;justify-content:space-between}
    .brand{font-weight:800;color:#fff;text-decoration:none;font-size:1.2rem;display:inline-flex;align-items:center;gap:.6rem}
    .brand .logo-dot{width:12px;height:12px;border-radius:3px;background:linear-gradient(135deg,#fff,#ffd1f6);transform:rotate(18deg);box-shadow:0 4px 14px rgba(0,0,0,0.12)}
    .nav-right{display:flex;align-items:center;gap:.7rem}
    .search-form{display:flex;align-items:center;background:rgba(255,255,255,0.10);padding:.18rem;border-radius:999px;overflow:hidden;transition:box-shadow .18s,transform .18s;backdrop-filter: blur(6px)}
    .search-form input{background:transparent;border:0;color:#fff;padding:.45rem .6rem;min-width:180px;outline:none;font-weight:500}
    .search-form .search-btn{background:linear-gradient(90deg,var(--accent),var(--accent-2));border:0;padding:.35rem .6rem;border-radius:999px;color:#fff;cursor:pointer;box-shadow:0 8px 22px rgba(91,108,255,0.12)}
    .menu-toggle{display:none;background:transparent;border:0;padding:.4rem;margin-left:.25rem;cursor:pointer}
    .menu-toggle .bar{display:block;width:20px;height:2px;background:rgba(255,255,255,0.95);margin:4px 0;border-radius:2px;transition:transform .22s,opacity .22s}
    .menu-toggle .bar.bar-open:nth-child(1){transform: translateY(6px) rotate(45deg)}
    .menu-toggle .bar.bar-open:nth-child(2){opacity:0}
    .menu-toggle .bar.bar-open:nth-child(3){transform: translateY(-6px) rotate(-45deg)}
    .main-nav{display:flex;gap:.6rem;align-items:center}
    .main-nav a{color:rgba(255,255,255,0.95);text-decoration:none;padding:.45rem .7rem;border-radius:.35rem;transition:transform .14s,background .14s}
    .main-nav a:hover{transform:translateY(-4px);background:rgba(255,255,255,0.06)}
    .main-nav a.active{box-shadow:inset 0 -3px 0 rgba(255,255,255,0.14)}
    @media (max-width:900px){
      .search-form input{min-width:110px}
    }
    @media (max-width:700px){
      .menu-toggle{display:block}
      .main-nav{position:absolute;left:12px;right:12px;top:64px;background:linear-gradient(180deg,var(--accent),#6e5cff);flex-direction:column;padding:1rem;border-radius:12px;gap:.4rem;transform-origin:top;transition:transform .22s,opacity .22s;opacity:0;pointer-events:none;transform:translateY(-6px)}
      .main-nav.open{opacity:1;pointer-events:auto;transform:translateY(0)}
      .nav-inner{position:relative}
      .search-form{display:none}
    }
  `]
})
export class NavComponent {
  open = signal(false);
  query = signal('');
  constructor(private router: Router) {}

  toggle() { this.open.set(!this.open()); }
  close() { this.open.set(false); }
  setQuery(v: string) { this.query.set(v || ''); }
  onSearch(e: Event) {
    e.preventDefault();
    const q = this.query().trim();
    this.close();
    if (q) {
      this.router.navigate(['/products'], { queryParams: { q } });
    } else {
      this.router.navigate(['/products']);
    }
  }
}
