import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8108213332781663',
  standalone: true,
  templateUrl: './app-8108213332781663.component.html',
  styleUrl: './app-8108213332781663.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8108213332781663Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
