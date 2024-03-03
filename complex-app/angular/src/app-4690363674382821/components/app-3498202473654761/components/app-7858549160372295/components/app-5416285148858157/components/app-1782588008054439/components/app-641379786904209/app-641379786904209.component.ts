import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-641379786904209',
  standalone: true,
  templateUrl: './app-641379786904209.component.html',
  styleUrl: './app-641379786904209.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App641379786904209Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
