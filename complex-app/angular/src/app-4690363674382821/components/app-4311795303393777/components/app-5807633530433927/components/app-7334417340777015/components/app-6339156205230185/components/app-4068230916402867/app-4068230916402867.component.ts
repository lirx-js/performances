import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4068230916402867',
  standalone: true,
  templateUrl: './app-4068230916402867.component.html',
  styleUrl: './app-4068230916402867.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4068230916402867Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
