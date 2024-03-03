import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8220586011955199',
  standalone: true,
  templateUrl: './app-8220586011955199.component.html',
  styleUrl: './app-8220586011955199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8220586011955199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
