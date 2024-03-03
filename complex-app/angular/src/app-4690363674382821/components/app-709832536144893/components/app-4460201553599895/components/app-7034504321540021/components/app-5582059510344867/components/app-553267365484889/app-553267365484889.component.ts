import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-553267365484889',
  standalone: true,
  templateUrl: './app-553267365484889.component.html',
  styleUrl: './app-553267365484889.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App553267365484889Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
