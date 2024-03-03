import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3892699417679869',
  standalone: true,
  templateUrl: './app-3892699417679869.component.html',
  styleUrl: './app-3892699417679869.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3892699417679869Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
