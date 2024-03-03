import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3245830246125197',
  standalone: true,
  templateUrl: './app-3245830246125197.component.html',
  styleUrl: './app-3245830246125197.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3245830246125197Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
