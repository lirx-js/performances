import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2015407254023515',
  standalone: true,
  templateUrl: './app-2015407254023515.component.html',
  styleUrl: './app-2015407254023515.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2015407254023515Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
