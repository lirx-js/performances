import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1036537866319637',
  standalone: true,
  templateUrl: './app-1036537866319637.component.html',
  styleUrl: './app-1036537866319637.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1036537866319637Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
