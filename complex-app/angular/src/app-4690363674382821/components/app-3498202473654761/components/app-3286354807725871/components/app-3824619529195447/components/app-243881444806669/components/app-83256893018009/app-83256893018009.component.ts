import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-83256893018009',
  standalone: true,
  templateUrl: './app-83256893018009.component.html',
  styleUrl: './app-83256893018009.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App83256893018009Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
