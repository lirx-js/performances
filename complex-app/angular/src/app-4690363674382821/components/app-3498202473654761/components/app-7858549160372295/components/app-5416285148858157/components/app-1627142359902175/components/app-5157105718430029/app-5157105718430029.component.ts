import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5157105718430029',
  standalone: true,
  templateUrl: './app-5157105718430029.component.html',
  styleUrl: './app-5157105718430029.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5157105718430029Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
