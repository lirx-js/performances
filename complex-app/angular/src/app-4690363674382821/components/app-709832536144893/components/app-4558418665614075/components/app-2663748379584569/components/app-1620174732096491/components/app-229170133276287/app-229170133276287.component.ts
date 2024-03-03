import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-229170133276287',
  standalone: true,
  templateUrl: './app-229170133276287.component.html',
  styleUrl: './app-229170133276287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App229170133276287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
