import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8808445136267809',
  standalone: true,
  templateUrl: './app-8808445136267809.component.html',
  styleUrl: './app-8808445136267809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8808445136267809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
