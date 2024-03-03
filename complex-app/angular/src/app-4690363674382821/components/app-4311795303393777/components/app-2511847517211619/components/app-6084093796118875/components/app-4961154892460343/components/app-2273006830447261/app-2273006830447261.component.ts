import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2273006830447261',
  standalone: true,
  templateUrl: './app-2273006830447261.component.html',
  styleUrl: './app-2273006830447261.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2273006830447261Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
