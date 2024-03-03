import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8856538862534069',
  standalone: true,
  templateUrl: './app-8856538862534069.component.html',
  styleUrl: './app-8856538862534069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8856538862534069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
