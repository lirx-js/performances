import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3485001968429871',
  standalone: true,
  templateUrl: './app-3485001968429871.component.html',
  styleUrl: './app-3485001968429871.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3485001968429871Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
