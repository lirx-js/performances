import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2775152072746785',
  standalone: true,
  templateUrl: './app-2775152072746785.component.html',
  styleUrl: './app-2775152072746785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2775152072746785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
