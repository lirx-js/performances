import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7472017290693419',
  standalone: true,
  templateUrl: './app-7472017290693419.component.html',
  styleUrl: './app-7472017290693419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7472017290693419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
