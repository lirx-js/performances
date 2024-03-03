import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3565698557135749',
  standalone: true,
  templateUrl: './app-3565698557135749.component.html',
  styleUrl: './app-3565698557135749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3565698557135749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
