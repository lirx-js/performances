import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-678734273241673',
  standalone: true,
  templateUrl: './app-678734273241673.component.html',
  styleUrl: './app-678734273241673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App678734273241673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
