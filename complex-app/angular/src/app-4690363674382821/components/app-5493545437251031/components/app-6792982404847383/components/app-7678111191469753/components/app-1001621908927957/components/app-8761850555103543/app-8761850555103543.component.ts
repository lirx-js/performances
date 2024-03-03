import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8761850555103543',
  standalone: true,
  templateUrl: './app-8761850555103543.component.html',
  styleUrl: './app-8761850555103543.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8761850555103543Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
