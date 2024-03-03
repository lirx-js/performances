import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-549994647220615',
  standalone: true,
  templateUrl: './app-549994647220615.component.html',
  styleUrl: './app-549994647220615.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App549994647220615Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
