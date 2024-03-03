import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-975821381846967',
  standalone: true,
  templateUrl: './app-975821381846967.component.html',
  styleUrl: './app-975821381846967.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App975821381846967Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
