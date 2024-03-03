import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8704840361694829',
  standalone: true,
  templateUrl: './app-8704840361694829.component.html',
  styleUrl: './app-8704840361694829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8704840361694829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
