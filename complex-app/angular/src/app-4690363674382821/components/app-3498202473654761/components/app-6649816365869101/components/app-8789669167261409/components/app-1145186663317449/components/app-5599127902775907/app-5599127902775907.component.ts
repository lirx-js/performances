import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5599127902775907',
  standalone: true,
  templateUrl: './app-5599127902775907.component.html',
  styleUrl: './app-5599127902775907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5599127902775907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
