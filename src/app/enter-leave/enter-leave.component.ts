import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-enter-leave',
  template: `
   <div class="container-fluid">
      <h2 class="mat-title">Enter/Leave</h2>
      <app-hero-list-enter-leave [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-enter-leave>
    </div>`
})
export class EnterLeaveComponent
{

  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

}
