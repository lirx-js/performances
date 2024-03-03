import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7551736827144457',
  standalone: true,
  templateUrl: './app-7551736827144457.component.html',
  styleUrl: './app-7551736827144457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7551736827144457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
