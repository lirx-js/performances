import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4597159906984977',
  standalone: true,
  templateUrl: './app-4597159906984977.component.html',
  styleUrl: './app-4597159906984977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4597159906984977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
