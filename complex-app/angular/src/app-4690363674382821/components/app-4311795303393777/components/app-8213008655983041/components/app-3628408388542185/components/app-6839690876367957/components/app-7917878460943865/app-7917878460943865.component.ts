import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7917878460943865',
  standalone: true,
  templateUrl: './app-7917878460943865.component.html',
  styleUrl: './app-7917878460943865.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7917878460943865Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
