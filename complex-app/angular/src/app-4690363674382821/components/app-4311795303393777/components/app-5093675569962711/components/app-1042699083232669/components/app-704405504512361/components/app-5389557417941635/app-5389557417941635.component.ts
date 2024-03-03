import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5389557417941635',
  standalone: true,
  templateUrl: './app-5389557417941635.component.html',
  styleUrl: './app-5389557417941635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5389557417941635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
