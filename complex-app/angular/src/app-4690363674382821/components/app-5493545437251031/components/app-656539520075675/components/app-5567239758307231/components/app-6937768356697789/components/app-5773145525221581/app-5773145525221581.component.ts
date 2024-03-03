import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5773145525221581',
  standalone: true,
  templateUrl: './app-5773145525221581.component.html',
  styleUrl: './app-5773145525221581.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5773145525221581Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
