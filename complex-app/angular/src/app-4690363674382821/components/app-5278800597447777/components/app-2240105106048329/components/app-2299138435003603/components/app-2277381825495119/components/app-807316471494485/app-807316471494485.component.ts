import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-807316471494485',
  standalone: true,
  templateUrl: './app-807316471494485.component.html',
  styleUrl: './app-807316471494485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App807316471494485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
