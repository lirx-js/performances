import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-153721879990325',
  standalone: true,
  templateUrl: './app-153721879990325.component.html',
  styleUrl: './app-153721879990325.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App153721879990325Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
