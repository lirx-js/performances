import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8583805796488653',
  standalone: true,
  templateUrl: './app-8583805796488653.component.html',
  styleUrl: './app-8583805796488653.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8583805796488653Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
