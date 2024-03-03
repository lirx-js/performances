import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4804934151778393',
  standalone: true,
  templateUrl: './app-4804934151778393.component.html',
  styleUrl: './app-4804934151778393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4804934151778393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
