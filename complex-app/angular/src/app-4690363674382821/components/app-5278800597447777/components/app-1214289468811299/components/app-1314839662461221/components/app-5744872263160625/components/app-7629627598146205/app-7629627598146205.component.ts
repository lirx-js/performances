import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7629627598146205',
  standalone: true,
  templateUrl: './app-7629627598146205.component.html',
  styleUrl: './app-7629627598146205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7629627598146205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
