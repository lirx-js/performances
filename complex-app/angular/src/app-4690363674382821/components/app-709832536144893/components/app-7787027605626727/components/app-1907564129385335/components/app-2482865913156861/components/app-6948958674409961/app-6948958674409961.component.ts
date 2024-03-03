import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6948958674409961',
  standalone: true,
  templateUrl: './app-6948958674409961.component.html',
  styleUrl: './app-6948958674409961.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6948958674409961Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
