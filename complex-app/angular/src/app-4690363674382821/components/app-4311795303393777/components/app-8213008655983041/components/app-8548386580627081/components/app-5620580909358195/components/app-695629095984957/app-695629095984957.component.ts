import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-695629095984957',
  standalone: true,
  templateUrl: './app-695629095984957.component.html',
  styleUrl: './app-695629095984957.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App695629095984957Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
