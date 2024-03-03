import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7351673078721415',
  standalone: true,
  templateUrl: './app-7351673078721415.component.html',
  styleUrl: './app-7351673078721415.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7351673078721415Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
