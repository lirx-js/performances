import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1052307578497397',
  standalone: true,
  templateUrl: './app-1052307578497397.component.html',
  styleUrl: './app-1052307578497397.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1052307578497397Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
