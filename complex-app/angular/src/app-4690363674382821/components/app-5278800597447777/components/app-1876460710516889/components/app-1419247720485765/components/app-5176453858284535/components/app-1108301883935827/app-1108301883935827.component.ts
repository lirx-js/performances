import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1108301883935827',
  standalone: true,
  templateUrl: './app-1108301883935827.component.html',
  styleUrl: './app-1108301883935827.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1108301883935827Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
