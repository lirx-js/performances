import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-250604439312525',
  standalone: true,
  templateUrl: './app-250604439312525.component.html',
  styleUrl: './app-250604439312525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App250604439312525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
