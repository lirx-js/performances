import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-209610325763613',
  standalone: true,
  templateUrl: './app-209610325763613.component.html',
  styleUrl: './app-209610325763613.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App209610325763613Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
