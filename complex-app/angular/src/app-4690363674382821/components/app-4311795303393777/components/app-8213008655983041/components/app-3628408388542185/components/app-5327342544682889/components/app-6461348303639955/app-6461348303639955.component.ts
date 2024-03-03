import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6461348303639955',
  standalone: true,
  templateUrl: './app-6461348303639955.component.html',
  styleUrl: './app-6461348303639955.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6461348303639955Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
