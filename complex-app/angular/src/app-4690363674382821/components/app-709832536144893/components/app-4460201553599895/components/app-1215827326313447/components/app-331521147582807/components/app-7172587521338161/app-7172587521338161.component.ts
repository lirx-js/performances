import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7172587521338161',
  standalone: true,
  templateUrl: './app-7172587521338161.component.html',
  styleUrl: './app-7172587521338161.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7172587521338161Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
