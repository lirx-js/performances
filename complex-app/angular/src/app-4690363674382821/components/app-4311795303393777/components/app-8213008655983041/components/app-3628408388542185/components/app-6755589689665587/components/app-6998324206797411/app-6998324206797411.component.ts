import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6998324206797411',
  standalone: true,
  templateUrl: './app-6998324206797411.component.html',
  styleUrl: './app-6998324206797411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6998324206797411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
