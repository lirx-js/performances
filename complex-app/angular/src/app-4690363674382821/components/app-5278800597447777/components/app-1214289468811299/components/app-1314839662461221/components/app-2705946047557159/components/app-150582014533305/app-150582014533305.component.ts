import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-150582014533305',
  standalone: true,
  templateUrl: './app-150582014533305.component.html',
  styleUrl: './app-150582014533305.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App150582014533305Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
