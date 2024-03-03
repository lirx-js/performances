import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5344816833931349',
  standalone: true,
  templateUrl: './app-5344816833931349.component.html',
  styleUrl: './app-5344816833931349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5344816833931349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
