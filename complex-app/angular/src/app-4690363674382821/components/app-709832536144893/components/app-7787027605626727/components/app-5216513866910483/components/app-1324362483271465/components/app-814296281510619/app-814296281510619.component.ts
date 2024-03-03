import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-814296281510619',
  standalone: true,
  templateUrl: './app-814296281510619.component.html',
  styleUrl: './app-814296281510619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App814296281510619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
