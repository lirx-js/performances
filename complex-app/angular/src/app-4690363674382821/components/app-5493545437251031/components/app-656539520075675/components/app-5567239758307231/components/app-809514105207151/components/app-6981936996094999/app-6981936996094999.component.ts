import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6981936996094999',
  standalone: true,
  templateUrl: './app-6981936996094999.component.html',
  styleUrl: './app-6981936996094999.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6981936996094999Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
