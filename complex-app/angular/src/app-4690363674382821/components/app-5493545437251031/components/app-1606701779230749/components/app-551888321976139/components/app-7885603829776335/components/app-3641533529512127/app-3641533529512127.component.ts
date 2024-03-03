import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3641533529512127',
  standalone: true,
  templateUrl: './app-3641533529512127.component.html',
  styleUrl: './app-3641533529512127.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3641533529512127Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
