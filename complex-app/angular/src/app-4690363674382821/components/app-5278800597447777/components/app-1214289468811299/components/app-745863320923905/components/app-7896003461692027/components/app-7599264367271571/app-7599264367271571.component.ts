import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7599264367271571',
  standalone: true,
  templateUrl: './app-7599264367271571.component.html',
  styleUrl: './app-7599264367271571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7599264367271571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
