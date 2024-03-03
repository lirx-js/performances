import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1687595608380323',
  standalone: true,
  templateUrl: './app-1687595608380323.component.html',
  styleUrl: './app-1687595608380323.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1687595608380323Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
