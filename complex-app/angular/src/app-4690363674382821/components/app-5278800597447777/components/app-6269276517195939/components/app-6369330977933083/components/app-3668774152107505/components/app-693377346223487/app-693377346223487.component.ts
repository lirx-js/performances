import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-693377346223487',
  standalone: true,
  templateUrl: './app-693377346223487.component.html',
  styleUrl: './app-693377346223487.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App693377346223487Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
