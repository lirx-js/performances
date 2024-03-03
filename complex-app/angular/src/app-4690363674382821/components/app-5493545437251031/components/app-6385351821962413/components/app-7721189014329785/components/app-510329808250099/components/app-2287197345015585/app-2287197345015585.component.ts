import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2287197345015585',
  standalone: true,
  templateUrl: './app-2287197345015585.component.html',
  styleUrl: './app-2287197345015585.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2287197345015585Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
