import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-526827053348237',
  standalone: true,
  templateUrl: './app-526827053348237.component.html',
  styleUrl: './app-526827053348237.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App526827053348237Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
