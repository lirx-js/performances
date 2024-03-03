import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4243308224689023',
  standalone: true,
  templateUrl: './app-4243308224689023.component.html',
  styleUrl: './app-4243308224689023.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4243308224689023Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
