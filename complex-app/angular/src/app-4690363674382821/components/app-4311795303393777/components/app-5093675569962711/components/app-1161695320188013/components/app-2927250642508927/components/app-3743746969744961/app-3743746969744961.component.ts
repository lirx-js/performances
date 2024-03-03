import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3743746969744961',
  standalone: true,
  templateUrl: './app-3743746969744961.component.html',
  styleUrl: './app-3743746969744961.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3743746969744961Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
