import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7429020181701945',
  standalone: true,
  templateUrl: './app-7429020181701945.component.html',
  styleUrl: './app-7429020181701945.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7429020181701945Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
