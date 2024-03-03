import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8471545093832763',
  standalone: true,
  templateUrl: './app-8471545093832763.component.html',
  styleUrl: './app-8471545093832763.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8471545093832763Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
