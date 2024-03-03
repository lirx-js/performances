import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3250487441782859',
  standalone: true,
  templateUrl: './app-3250487441782859.component.html',
  styleUrl: './app-3250487441782859.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3250487441782859Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
