import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-364494505214457',
  standalone: true,
  templateUrl: './app-364494505214457.component.html',
  styleUrl: './app-364494505214457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App364494505214457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
