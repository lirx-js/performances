import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5588146886765441',
  standalone: true,
  templateUrl: './app-5588146886765441.component.html',
  styleUrl: './app-5588146886765441.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5588146886765441Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
