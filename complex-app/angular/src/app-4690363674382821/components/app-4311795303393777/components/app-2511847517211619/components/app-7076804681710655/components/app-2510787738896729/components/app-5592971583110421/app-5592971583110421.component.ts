import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5592971583110421',
  standalone: true,
  templateUrl: './app-5592971583110421.component.html',
  styleUrl: './app-5592971583110421.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5592971583110421Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
