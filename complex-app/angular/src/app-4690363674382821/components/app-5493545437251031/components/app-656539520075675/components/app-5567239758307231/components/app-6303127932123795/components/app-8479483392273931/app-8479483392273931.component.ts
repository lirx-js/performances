import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8479483392273931',
  standalone: true,
  templateUrl: './app-8479483392273931.component.html',
  styleUrl: './app-8479483392273931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8479483392273931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
