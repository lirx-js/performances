import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1068235665995701',
  standalone: true,
  templateUrl: './app-1068235665995701.component.html',
  styleUrl: './app-1068235665995701.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1068235665995701Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
