import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8061254884022601',
  standalone: true,
  templateUrl: './app-8061254884022601.component.html',
  styleUrl: './app-8061254884022601.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8061254884022601Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
