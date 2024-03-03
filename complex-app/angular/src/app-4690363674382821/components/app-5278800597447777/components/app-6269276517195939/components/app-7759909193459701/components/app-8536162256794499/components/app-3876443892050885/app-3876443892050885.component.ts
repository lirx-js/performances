import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3876443892050885',
  standalone: true,
  templateUrl: './app-3876443892050885.component.html',
  styleUrl: './app-3876443892050885.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3876443892050885Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
