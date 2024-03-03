import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3617150561373153',
  standalone: true,
  templateUrl: './app-3617150561373153.component.html',
  styleUrl: './app-3617150561373153.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3617150561373153Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
