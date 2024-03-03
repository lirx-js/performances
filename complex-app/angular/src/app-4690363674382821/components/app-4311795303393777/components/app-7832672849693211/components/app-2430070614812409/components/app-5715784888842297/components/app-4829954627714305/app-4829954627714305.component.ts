import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4829954627714305',
  standalone: true,
  templateUrl: './app-4829954627714305.component.html',
  styleUrl: './app-4829954627714305.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4829954627714305Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
