import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5358397622250347',
  standalone: true,
  templateUrl: './app-5358397622250347.component.html',
  styleUrl: './app-5358397622250347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5358397622250347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
