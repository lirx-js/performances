import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4691828467179279',
  standalone: true,
  templateUrl: './app-4691828467179279.component.html',
  styleUrl: './app-4691828467179279.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4691828467179279Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
