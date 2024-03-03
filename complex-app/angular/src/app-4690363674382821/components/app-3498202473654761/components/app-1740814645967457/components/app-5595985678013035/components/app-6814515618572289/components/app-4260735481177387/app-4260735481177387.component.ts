import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4260735481177387',
  standalone: true,
  templateUrl: './app-4260735481177387.component.html',
  styleUrl: './app-4260735481177387.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4260735481177387Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
