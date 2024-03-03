import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-641557509678049',
  standalone: true,
  templateUrl: './app-641557509678049.component.html',
  styleUrl: './app-641557509678049.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App641557509678049Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
