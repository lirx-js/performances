import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3834584358633091',
  standalone: true,
  templateUrl: './app-3834584358633091.component.html',
  styleUrl: './app-3834584358633091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3834584358633091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
