import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8260890094732165',
  standalone: true,
  templateUrl: './app-8260890094732165.component.html',
  styleUrl: './app-8260890094732165.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8260890094732165Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
