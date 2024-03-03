import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1462140050451703',
  standalone: true,
  templateUrl: './app-1462140050451703.component.html',
  styleUrl: './app-1462140050451703.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1462140050451703Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
