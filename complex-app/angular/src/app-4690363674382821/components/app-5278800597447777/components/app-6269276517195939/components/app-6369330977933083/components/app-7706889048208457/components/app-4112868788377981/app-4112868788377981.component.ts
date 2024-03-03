import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4112868788377981',
  standalone: true,
  templateUrl: './app-4112868788377981.component.html',
  styleUrl: './app-4112868788377981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4112868788377981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
