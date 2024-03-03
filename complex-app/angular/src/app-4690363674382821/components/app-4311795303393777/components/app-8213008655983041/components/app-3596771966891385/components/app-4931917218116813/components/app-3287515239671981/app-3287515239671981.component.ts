import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3287515239671981',
  standalone: true,
  templateUrl: './app-3287515239671981.component.html',
  styleUrl: './app-3287515239671981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3287515239671981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
