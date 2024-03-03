import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6842083784733119',
  standalone: true,
  templateUrl: './app-6842083784733119.component.html',
  styleUrl: './app-6842083784733119.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6842083784733119Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
