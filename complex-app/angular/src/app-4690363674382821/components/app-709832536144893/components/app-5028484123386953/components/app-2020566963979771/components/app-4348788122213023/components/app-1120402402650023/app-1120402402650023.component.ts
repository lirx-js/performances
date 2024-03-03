import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1120402402650023',
  standalone: true,
  templateUrl: './app-1120402402650023.component.html',
  styleUrl: './app-1120402402650023.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1120402402650023Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
