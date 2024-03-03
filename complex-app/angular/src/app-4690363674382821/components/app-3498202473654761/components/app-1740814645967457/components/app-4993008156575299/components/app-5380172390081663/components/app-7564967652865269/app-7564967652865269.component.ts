import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7564967652865269',
  standalone: true,
  templateUrl: './app-7564967652865269.component.html',
  styleUrl: './app-7564967652865269.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7564967652865269Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
