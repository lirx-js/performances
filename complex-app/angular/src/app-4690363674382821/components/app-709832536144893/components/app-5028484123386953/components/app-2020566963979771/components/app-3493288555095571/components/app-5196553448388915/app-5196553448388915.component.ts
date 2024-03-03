import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5196553448388915',
  standalone: true,
  templateUrl: './app-5196553448388915.component.html',
  styleUrl: './app-5196553448388915.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5196553448388915Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
