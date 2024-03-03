import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4472862241054063',
  standalone: true,
  templateUrl: './app-4472862241054063.component.html',
  styleUrl: './app-4472862241054063.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4472862241054063Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
