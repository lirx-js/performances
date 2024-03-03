import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7034420644471567',
  standalone: true,
  templateUrl: './app-7034420644471567.component.html',
  styleUrl: './app-7034420644471567.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7034420644471567Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
