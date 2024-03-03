import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6009384503945991',
  standalone: true,
  templateUrl: './app-6009384503945991.component.html',
  styleUrl: './app-6009384503945991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6009384503945991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
