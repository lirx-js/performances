import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3345697258712881',
  standalone: true,
  templateUrl: './app-3345697258712881.component.html',
  styleUrl: './app-3345697258712881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3345697258712881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
