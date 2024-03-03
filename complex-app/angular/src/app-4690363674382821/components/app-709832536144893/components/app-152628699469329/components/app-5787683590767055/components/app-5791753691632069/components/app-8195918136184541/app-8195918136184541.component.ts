import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8195918136184541',
  standalone: true,
  templateUrl: './app-8195918136184541.component.html',
  styleUrl: './app-8195918136184541.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8195918136184541Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
