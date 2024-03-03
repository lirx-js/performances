import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1261560631080923',
  standalone: true,
  templateUrl: './app-1261560631080923.component.html',
  styleUrl: './app-1261560631080923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1261560631080923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
