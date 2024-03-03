import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5105119935741623',
  standalone: true,
  templateUrl: './app-5105119935741623.component.html',
  styleUrl: './app-5105119935741623.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5105119935741623Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
