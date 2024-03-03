import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5663247354566217',
  standalone: true,
  templateUrl: './app-5663247354566217.component.html',
  styleUrl: './app-5663247354566217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5663247354566217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
