import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4528986214262245',
  standalone: true,
  templateUrl: './app-4528986214262245.component.html',
  styleUrl: './app-4528986214262245.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4528986214262245Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
