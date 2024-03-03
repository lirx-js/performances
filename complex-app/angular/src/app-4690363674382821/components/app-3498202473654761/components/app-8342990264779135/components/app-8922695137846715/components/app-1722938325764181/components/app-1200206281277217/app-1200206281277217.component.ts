import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1200206281277217',
  standalone: true,
  templateUrl: './app-1200206281277217.component.html',
  styleUrl: './app-1200206281277217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1200206281277217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
