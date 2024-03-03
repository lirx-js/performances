import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-699721903756981',
  standalone: true,
  templateUrl: './app-699721903756981.component.html',
  styleUrl: './app-699721903756981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App699721903756981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
