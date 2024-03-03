import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3113118327349961',
  standalone: true,
  templateUrl: './app-3113118327349961.component.html',
  styleUrl: './app-3113118327349961.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3113118327349961Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
