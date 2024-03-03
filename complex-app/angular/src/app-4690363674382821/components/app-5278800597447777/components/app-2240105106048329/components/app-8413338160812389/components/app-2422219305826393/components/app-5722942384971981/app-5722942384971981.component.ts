import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5722942384971981',
  standalone: true,
  templateUrl: './app-5722942384971981.component.html',
  styleUrl: './app-5722942384971981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5722942384971981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
