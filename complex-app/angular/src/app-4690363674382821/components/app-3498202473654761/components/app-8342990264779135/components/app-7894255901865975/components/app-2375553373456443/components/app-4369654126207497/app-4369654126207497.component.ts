import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4369654126207497',
  standalone: true,
  templateUrl: './app-4369654126207497.component.html',
  styleUrl: './app-4369654126207497.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4369654126207497Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
