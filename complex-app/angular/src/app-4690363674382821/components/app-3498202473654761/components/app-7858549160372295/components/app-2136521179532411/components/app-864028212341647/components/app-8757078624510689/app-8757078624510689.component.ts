import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8757078624510689',
  standalone: true,
  templateUrl: './app-8757078624510689.component.html',
  styleUrl: './app-8757078624510689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8757078624510689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
