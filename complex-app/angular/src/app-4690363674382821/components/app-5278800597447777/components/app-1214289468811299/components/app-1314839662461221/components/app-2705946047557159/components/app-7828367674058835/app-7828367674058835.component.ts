import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7828367674058835',
  standalone: true,
  templateUrl: './app-7828367674058835.component.html',
  styleUrl: './app-7828367674058835.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7828367674058835Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
