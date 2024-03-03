import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2123382574866859',
  standalone: true,
  templateUrl: './app-2123382574866859.component.html',
  styleUrl: './app-2123382574866859.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2123382574866859Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
