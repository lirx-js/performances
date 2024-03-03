import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-528734745974817',
  standalone: true,
  templateUrl: './app-528734745974817.component.html',
  styleUrl: './app-528734745974817.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App528734745974817Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
