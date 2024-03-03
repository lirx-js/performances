import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3837880143513305',
  standalone: true,
  templateUrl: './app-3837880143513305.component.html',
  styleUrl: './app-3837880143513305.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3837880143513305Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
