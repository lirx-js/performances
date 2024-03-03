import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4332733820917395',
  standalone: true,
  templateUrl: './app-4332733820917395.component.html',
  styleUrl: './app-4332733820917395.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4332733820917395Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
