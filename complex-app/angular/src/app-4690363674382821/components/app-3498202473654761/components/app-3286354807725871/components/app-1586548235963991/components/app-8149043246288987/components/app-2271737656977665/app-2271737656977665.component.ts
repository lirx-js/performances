import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2271737656977665',
  standalone: true,
  templateUrl: './app-2271737656977665.component.html',
  styleUrl: './app-2271737656977665.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2271737656977665Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
