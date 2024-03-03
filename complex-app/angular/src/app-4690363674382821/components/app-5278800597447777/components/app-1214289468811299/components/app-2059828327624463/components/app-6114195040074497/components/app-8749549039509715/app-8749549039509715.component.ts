import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8749549039509715',
  standalone: true,
  templateUrl: './app-8749549039509715.component.html',
  styleUrl: './app-8749549039509715.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8749549039509715Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
