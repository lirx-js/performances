import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-584346872750729',
  standalone: true,
  templateUrl: './app-584346872750729.component.html',
  styleUrl: './app-584346872750729.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App584346872750729Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
