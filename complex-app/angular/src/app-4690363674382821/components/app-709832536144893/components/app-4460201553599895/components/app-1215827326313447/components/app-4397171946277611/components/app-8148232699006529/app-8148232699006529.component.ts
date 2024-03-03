import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8148232699006529',
  standalone: true,
  templateUrl: './app-8148232699006529.component.html',
  styleUrl: './app-8148232699006529.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8148232699006529Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
