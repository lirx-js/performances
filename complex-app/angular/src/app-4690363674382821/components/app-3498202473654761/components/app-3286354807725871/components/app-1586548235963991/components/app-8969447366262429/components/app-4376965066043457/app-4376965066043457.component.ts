import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4376965066043457',
  standalone: true,
  templateUrl: './app-4376965066043457.component.html',
  styleUrl: './app-4376965066043457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4376965066043457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
