import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8663446819900031',
  standalone: true,
  templateUrl: './app-8663446819900031.component.html',
  styleUrl: './app-8663446819900031.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8663446819900031Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
