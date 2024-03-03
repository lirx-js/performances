import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7399032476721113',
  standalone: true,
  templateUrl: './app-7399032476721113.component.html',
  styleUrl: './app-7399032476721113.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7399032476721113Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
