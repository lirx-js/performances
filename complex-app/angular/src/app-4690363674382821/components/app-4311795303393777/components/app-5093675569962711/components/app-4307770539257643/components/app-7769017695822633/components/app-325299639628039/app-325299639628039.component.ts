import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-325299639628039',
  standalone: true,
  templateUrl: './app-325299639628039.component.html',
  styleUrl: './app-325299639628039.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App325299639628039Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
