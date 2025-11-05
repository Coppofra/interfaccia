import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contacts',
  imports: [CommonModule],
  template: `
    <h2>Contatti</h2>
    <form class="form" (submit)="submit($event)">
      <input name="name" placeholder="Nome" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" rows="5" placeholder="Messaggio" required></textarea>
      <div style="display:flex;gap:.5rem">
        <button class="btn" type="submit">Invia</button>
        <div *ngIf="sent()" style="align-self:center;color:green">Messaggio pronto (demo)</div>
      </div>
    </form>

    <section style="margin-top:1rem">
      <h3>Seguici</h3>
      <div style="display:flex;gap:.5rem">
        <a class="pill" href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        <a class="pill" href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
      </div>
    </section>
  `
})
export class ContactsComponent {
  sent = signal(false);
  submit(e: Event) {
    e.preventDefault();
    this.sent.set(true);
    setTimeout(()=> this.sent.set(false), 3500);
  }
}
