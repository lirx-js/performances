import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5286197721562209',
  standalone: true,
  templateUrl: './app-5286197721562209.component.html',
  styleUrl: './app-5286197721562209.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5286197721562209Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
