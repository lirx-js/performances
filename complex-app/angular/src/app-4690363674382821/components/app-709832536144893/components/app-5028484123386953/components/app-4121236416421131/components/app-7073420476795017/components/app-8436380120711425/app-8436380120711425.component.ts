import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8436380120711425',
  standalone: true,
  templateUrl: './app-8436380120711425.component.html',
  styleUrl: './app-8436380120711425.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8436380120711425Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
