import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8092975592490391',
  standalone: true,
  templateUrl: './app-8092975592490391.component.html',
  styleUrl: './app-8092975592490391.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8092975592490391Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
