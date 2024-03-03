import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8306824708122497',
  standalone: true,
  templateUrl: './app-8306824708122497.component.html',
  styleUrl: './app-8306824708122497.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8306824708122497Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
