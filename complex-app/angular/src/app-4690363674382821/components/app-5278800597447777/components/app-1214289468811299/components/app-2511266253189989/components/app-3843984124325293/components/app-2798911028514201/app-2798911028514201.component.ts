import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2798911028514201',
  standalone: true,
  templateUrl: './app-2798911028514201.component.html',
  styleUrl: './app-2798911028514201.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2798911028514201Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
