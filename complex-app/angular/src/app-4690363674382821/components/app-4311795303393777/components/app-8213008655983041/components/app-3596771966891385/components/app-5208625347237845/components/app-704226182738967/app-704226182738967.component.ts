import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-704226182738967',
  standalone: true,
  templateUrl: './app-704226182738967.component.html',
  styleUrl: './app-704226182738967.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App704226182738967Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
