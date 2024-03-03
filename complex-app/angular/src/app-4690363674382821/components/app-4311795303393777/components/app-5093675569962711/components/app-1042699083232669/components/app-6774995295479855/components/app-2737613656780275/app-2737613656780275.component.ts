import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2737613656780275',
  standalone: true,
  templateUrl: './app-2737613656780275.component.html',
  styleUrl: './app-2737613656780275.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2737613656780275Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
