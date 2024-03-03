import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4761286390943457',
  standalone: true,
  templateUrl: './app-4761286390943457.component.html',
  styleUrl: './app-4761286390943457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4761286390943457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
