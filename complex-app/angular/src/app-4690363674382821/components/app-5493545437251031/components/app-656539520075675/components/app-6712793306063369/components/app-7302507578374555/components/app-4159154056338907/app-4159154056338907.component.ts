import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4159154056338907',
  standalone: true,
  templateUrl: './app-4159154056338907.component.html',
  styleUrl: './app-4159154056338907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4159154056338907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
