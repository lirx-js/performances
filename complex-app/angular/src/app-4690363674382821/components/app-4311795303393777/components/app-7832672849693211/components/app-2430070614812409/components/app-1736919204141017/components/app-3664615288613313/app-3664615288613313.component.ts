import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3664615288613313',
  standalone: true,
  templateUrl: './app-3664615288613313.component.html',
  styleUrl: './app-3664615288613313.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3664615288613313Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
