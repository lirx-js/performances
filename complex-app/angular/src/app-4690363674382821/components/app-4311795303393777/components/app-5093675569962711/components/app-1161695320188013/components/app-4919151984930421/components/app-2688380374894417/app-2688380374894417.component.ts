import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2688380374894417',
  standalone: true,
  templateUrl: './app-2688380374894417.component.html',
  styleUrl: './app-2688380374894417.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2688380374894417Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
