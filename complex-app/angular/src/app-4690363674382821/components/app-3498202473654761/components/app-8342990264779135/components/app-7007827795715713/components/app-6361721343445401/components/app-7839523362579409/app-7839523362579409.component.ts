import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7839523362579409',
  standalone: true,
  templateUrl: './app-7839523362579409.component.html',
  styleUrl: './app-7839523362579409.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7839523362579409Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
