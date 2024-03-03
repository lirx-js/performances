import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-73092630589995',
  standalone: true,
  templateUrl: './app-73092630589995.component.html',
  styleUrl: './app-73092630589995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App73092630589995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
