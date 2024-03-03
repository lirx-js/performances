import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1329990719075687',
  standalone: true,
  templateUrl: './app-1329990719075687.component.html',
  styleUrl: './app-1329990719075687.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1329990719075687Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
