import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8818022609839345',
  standalone: true,
  templateUrl: './app-8818022609839345.component.html',
  styleUrl: './app-8818022609839345.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8818022609839345Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
