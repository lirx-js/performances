import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7086633030446971',
  standalone: true,
  templateUrl: './app-7086633030446971.component.html',
  styleUrl: './app-7086633030446971.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7086633030446971Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
