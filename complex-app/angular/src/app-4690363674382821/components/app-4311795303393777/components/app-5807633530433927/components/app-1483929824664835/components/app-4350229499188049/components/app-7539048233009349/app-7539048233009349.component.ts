import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7539048233009349',
  standalone: true,
  templateUrl: './app-7539048233009349.component.html',
  styleUrl: './app-7539048233009349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7539048233009349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
