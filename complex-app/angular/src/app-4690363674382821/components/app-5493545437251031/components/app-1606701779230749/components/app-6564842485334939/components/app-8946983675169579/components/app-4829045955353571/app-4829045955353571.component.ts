import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4829045955353571',
  standalone: true,
  templateUrl: './app-4829045955353571.component.html',
  styleUrl: './app-4829045955353571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4829045955353571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
