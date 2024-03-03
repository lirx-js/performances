import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8048096344720359',
  standalone: true,
  templateUrl: './app-8048096344720359.component.html',
  styleUrl: './app-8048096344720359.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8048096344720359Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
