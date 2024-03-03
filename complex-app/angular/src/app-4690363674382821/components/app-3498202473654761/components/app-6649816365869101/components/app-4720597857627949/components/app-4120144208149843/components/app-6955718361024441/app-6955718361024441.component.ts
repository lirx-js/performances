import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6955718361024441',
  standalone: true,
  templateUrl: './app-6955718361024441.component.html',
  styleUrl: './app-6955718361024441.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6955718361024441Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
