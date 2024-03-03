import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2004684297823045',
  standalone: true,
  templateUrl: './app-2004684297823045.component.html',
  styleUrl: './app-2004684297823045.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2004684297823045Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
