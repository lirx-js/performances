import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4343190202139735',
  standalone: true,
  templateUrl: './app-4343190202139735.component.html',
  styleUrl: './app-4343190202139735.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4343190202139735Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
