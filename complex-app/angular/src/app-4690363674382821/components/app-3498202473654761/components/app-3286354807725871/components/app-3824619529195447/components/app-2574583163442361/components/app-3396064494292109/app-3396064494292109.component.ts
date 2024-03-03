import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3396064494292109',
  standalone: true,
  templateUrl: './app-3396064494292109.component.html',
  styleUrl: './app-3396064494292109.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3396064494292109Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
