import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3760696835161575',
  standalone: true,
  templateUrl: './app-3760696835161575.component.html',
  styleUrl: './app-3760696835161575.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3760696835161575Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
