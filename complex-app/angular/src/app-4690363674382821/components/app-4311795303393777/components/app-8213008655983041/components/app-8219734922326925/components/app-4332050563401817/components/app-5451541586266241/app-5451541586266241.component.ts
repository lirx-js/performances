import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5451541586266241',
  standalone: true,
  templateUrl: './app-5451541586266241.component.html',
  styleUrl: './app-5451541586266241.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5451541586266241Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
