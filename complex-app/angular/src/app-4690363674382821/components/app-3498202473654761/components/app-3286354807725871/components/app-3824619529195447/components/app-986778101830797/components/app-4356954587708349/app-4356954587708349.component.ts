import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4356954587708349',
  standalone: true,
  templateUrl: './app-4356954587708349.component.html',
  styleUrl: './app-4356954587708349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4356954587708349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
