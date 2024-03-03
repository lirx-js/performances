import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-311043611156941',
  standalone: true,
  templateUrl: './app-311043611156941.component.html',
  styleUrl: './app-311043611156941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App311043611156941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
