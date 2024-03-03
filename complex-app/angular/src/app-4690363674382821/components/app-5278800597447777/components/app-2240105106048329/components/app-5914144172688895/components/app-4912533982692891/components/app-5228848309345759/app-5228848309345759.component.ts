import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5228848309345759',
  standalone: true,
  templateUrl: './app-5228848309345759.component.html',
  styleUrl: './app-5228848309345759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5228848309345759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
