import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5560503636579915',
  standalone: true,
  templateUrl: './app-5560503636579915.component.html',
  styleUrl: './app-5560503636579915.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5560503636579915Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
