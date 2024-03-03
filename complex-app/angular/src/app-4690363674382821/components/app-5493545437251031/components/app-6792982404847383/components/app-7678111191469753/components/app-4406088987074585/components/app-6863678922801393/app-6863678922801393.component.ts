import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6863678922801393',
  standalone: true,
  templateUrl: './app-6863678922801393.component.html',
  styleUrl: './app-6863678922801393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6863678922801393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
