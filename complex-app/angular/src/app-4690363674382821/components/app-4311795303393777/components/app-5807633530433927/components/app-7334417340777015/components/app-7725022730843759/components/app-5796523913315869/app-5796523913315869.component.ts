import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5796523913315869',
  standalone: true,
  templateUrl: './app-5796523913315869.component.html',
  styleUrl: './app-5796523913315869.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5796523913315869Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
