import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5595938873779789',
  standalone: true,
  templateUrl: './app-5595938873779789.component.html',
  styleUrl: './app-5595938873779789.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5595938873779789Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
