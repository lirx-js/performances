import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8903176739339423',
  standalone: true,
  templateUrl: './app-8903176739339423.component.html',
  styleUrl: './app-8903176739339423.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8903176739339423Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
