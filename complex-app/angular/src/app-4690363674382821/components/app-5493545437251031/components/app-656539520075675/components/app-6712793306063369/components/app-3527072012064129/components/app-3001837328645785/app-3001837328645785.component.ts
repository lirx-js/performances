import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3001837328645785',
  standalone: true,
  templateUrl: './app-3001837328645785.component.html',
  styleUrl: './app-3001837328645785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3001837328645785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
