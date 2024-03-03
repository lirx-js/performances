import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7462909117201015',
  standalone: true,
  templateUrl: './app-7462909117201015.component.html',
  styleUrl: './app-7462909117201015.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7462909117201015Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
