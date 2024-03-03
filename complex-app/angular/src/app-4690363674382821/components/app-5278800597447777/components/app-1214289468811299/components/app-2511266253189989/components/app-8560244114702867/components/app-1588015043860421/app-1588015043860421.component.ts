import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1588015043860421',
  standalone: true,
  templateUrl: './app-1588015043860421.component.html',
  styleUrl: './app-1588015043860421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1588015043860421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
