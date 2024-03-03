import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6213791745770215',
  standalone: true,
  templateUrl: './app-6213791745770215.component.html',
  styleUrl: './app-6213791745770215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6213791745770215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
