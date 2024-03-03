import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5717317939099845',
  standalone: true,
  templateUrl: './app-5717317939099845.component.html',
  styleUrl: './app-5717317939099845.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5717317939099845Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
