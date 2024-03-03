import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7030309681656695',
  standalone: true,
  templateUrl: './app-7030309681656695.component.html',
  styleUrl: './app-7030309681656695.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7030309681656695Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
