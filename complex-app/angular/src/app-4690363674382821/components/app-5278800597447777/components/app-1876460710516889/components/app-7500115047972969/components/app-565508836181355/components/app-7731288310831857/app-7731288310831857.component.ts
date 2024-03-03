import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7731288310831857',
  standalone: true,
  templateUrl: './app-7731288310831857.component.html',
  styleUrl: './app-7731288310831857.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7731288310831857Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
