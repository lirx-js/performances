import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6263301348417501',
  standalone: true,
  templateUrl: './app-6263301348417501.component.html',
  styleUrl: './app-6263301348417501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6263301348417501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
