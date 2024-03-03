import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3972128309072775',
  standalone: true,
  templateUrl: './app-3972128309072775.component.html',
  styleUrl: './app-3972128309072775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3972128309072775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}