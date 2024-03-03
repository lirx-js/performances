import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-478950230440271',
  standalone: true,
  templateUrl: './app-478950230440271.component.html',
  styleUrl: './app-478950230440271.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App478950230440271Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
