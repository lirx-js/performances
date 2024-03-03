import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3518438568991131',
  standalone: true,
  templateUrl: './app-3518438568991131.component.html',
  styleUrl: './app-3518438568991131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3518438568991131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
