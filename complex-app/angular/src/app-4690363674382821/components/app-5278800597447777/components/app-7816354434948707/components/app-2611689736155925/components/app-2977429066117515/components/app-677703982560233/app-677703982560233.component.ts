import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-677703982560233',
  standalone: true,
  templateUrl: './app-677703982560233.component.html',
  styleUrl: './app-677703982560233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App677703982560233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
