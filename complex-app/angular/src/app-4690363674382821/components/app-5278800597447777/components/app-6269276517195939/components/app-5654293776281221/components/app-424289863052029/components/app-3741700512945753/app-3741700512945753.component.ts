import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3741700512945753',
  standalone: true,
  templateUrl: './app-3741700512945753.component.html',
  styleUrl: './app-3741700512945753.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3741700512945753Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
