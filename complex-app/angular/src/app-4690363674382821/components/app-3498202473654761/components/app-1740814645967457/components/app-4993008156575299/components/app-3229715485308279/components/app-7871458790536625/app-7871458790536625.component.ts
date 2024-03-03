import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7871458790536625',
  standalone: true,
  templateUrl: './app-7871458790536625.component.html',
  styleUrl: './app-7871458790536625.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7871458790536625Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
