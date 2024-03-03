import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-823938520096517',
  standalone: true,
  templateUrl: './app-823938520096517.component.html',
  styleUrl: './app-823938520096517.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App823938520096517Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
