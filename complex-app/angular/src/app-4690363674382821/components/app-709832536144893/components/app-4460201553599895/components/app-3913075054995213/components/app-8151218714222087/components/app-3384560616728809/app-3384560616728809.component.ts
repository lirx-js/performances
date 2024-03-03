import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3384560616728809',
  standalone: true,
  templateUrl: './app-3384560616728809.component.html',
  styleUrl: './app-3384560616728809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3384560616728809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
