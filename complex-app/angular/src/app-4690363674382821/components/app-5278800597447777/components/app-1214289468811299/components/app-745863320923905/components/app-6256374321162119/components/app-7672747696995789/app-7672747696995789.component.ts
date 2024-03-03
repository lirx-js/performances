import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7672747696995789',
  standalone: true,
  templateUrl: './app-7672747696995789.component.html',
  styleUrl: './app-7672747696995789.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7672747696995789Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
