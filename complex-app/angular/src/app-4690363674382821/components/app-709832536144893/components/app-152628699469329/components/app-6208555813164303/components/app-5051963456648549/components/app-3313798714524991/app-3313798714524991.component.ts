import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3313798714524991',
  standalone: true,
  templateUrl: './app-3313798714524991.component.html',
  styleUrl: './app-3313798714524991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3313798714524991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
