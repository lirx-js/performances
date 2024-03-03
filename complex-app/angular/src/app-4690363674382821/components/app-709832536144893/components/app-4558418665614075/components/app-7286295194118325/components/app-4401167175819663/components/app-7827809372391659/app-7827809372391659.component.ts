import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7827809372391659',
  standalone: true,
  templateUrl: './app-7827809372391659.component.html',
  styleUrl: './app-7827809372391659.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7827809372391659Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
