import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5248611182669605',
  standalone: true,
  templateUrl: './app-5248611182669605.component.html',
  styleUrl: './app-5248611182669605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5248611182669605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
