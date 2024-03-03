import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2928527425603099',
  standalone: true,
  templateUrl: './app-2928527425603099.component.html',
  styleUrl: './app-2928527425603099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2928527425603099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
