import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2089706544063213',
  standalone: true,
  templateUrl: './app-2089706544063213.component.html',
  styleUrl: './app-2089706544063213.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2089706544063213Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
