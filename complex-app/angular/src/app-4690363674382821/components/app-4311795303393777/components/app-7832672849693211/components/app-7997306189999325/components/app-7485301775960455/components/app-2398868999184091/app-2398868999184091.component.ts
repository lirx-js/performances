import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2398868999184091',
  standalone: true,
  templateUrl: './app-2398868999184091.component.html',
  styleUrl: './app-2398868999184091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2398868999184091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
