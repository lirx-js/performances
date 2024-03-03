import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8956521257696729',
  standalone: true,
  templateUrl: './app-8956521257696729.component.html',
  styleUrl: './app-8956521257696729.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8956521257696729Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
