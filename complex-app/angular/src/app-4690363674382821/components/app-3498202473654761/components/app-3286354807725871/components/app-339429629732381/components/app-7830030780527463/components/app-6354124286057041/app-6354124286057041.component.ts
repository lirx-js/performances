import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6354124286057041',
  standalone: true,
  templateUrl: './app-6354124286057041.component.html',
  styleUrl: './app-6354124286057041.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6354124286057041Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
