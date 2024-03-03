import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3898540071294405',
  standalone: true,
  templateUrl: './app-3898540071294405.component.html',
  styleUrl: './app-3898540071294405.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3898540071294405Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
