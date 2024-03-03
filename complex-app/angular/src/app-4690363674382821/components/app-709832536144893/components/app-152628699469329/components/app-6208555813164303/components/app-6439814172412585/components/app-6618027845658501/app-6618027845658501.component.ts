import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6618027845658501',
  standalone: true,
  templateUrl: './app-6618027845658501.component.html',
  styleUrl: './app-6618027845658501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6618027845658501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
