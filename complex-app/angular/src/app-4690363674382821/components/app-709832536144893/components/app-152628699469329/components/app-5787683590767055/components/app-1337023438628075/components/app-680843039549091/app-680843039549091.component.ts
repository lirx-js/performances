import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-680843039549091',
  standalone: true,
  templateUrl: './app-680843039549091.component.html',
  styleUrl: './app-680843039549091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App680843039549091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
