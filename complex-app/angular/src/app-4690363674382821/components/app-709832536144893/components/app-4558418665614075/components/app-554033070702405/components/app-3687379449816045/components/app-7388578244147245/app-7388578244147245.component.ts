import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7388578244147245',
  standalone: true,
  templateUrl: './app-7388578244147245.component.html',
  styleUrl: './app-7388578244147245.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7388578244147245Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
