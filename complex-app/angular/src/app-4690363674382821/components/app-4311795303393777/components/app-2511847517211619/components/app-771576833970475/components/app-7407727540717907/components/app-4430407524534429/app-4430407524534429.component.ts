import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4430407524534429',
  standalone: true,
  templateUrl: './app-4430407524534429.component.html',
  styleUrl: './app-4430407524534429.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4430407524534429Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
