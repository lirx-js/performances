import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3031499332553991',
  standalone: true,
  templateUrl: './app-3031499332553991.component.html',
  styleUrl: './app-3031499332553991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3031499332553991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
