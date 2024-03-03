import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7392026762781681',
  standalone: true,
  templateUrl: './app-7392026762781681.component.html',
  styleUrl: './app-7392026762781681.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7392026762781681Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
