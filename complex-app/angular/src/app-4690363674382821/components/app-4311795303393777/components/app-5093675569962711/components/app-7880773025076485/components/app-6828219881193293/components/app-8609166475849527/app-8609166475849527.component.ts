import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8609166475849527',
  standalone: true,
  templateUrl: './app-8609166475849527.component.html',
  styleUrl: './app-8609166475849527.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8609166475849527Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
