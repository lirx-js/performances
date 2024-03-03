import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2701521166416389',
  standalone: true,
  templateUrl: './app-2701521166416389.component.html',
  styleUrl: './app-2701521166416389.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2701521166416389Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
