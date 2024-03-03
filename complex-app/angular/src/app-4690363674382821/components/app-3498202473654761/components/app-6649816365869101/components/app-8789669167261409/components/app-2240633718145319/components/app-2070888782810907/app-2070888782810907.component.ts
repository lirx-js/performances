import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2070888782810907',
  standalone: true,
  templateUrl: './app-2070888782810907.component.html',
  styleUrl: './app-2070888782810907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2070888782810907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
