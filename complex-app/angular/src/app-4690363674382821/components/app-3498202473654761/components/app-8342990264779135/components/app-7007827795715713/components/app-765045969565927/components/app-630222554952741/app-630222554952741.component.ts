import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-630222554952741',
  standalone: true,
  templateUrl: './app-630222554952741.component.html',
  styleUrl: './app-630222554952741.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App630222554952741Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
