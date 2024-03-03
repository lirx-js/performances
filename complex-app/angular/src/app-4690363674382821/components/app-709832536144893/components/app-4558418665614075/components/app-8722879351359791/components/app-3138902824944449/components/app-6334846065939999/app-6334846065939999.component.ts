import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6334846065939999',
  standalone: true,
  templateUrl: './app-6334846065939999.component.html',
  styleUrl: './app-6334846065939999.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6334846065939999Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
