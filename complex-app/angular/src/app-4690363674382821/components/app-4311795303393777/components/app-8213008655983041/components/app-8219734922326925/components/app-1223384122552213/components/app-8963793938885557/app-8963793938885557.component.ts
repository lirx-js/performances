import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8963793938885557',
  standalone: true,
  templateUrl: './app-8963793938885557.component.html',
  styleUrl: './app-8963793938885557.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8963793938885557Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
