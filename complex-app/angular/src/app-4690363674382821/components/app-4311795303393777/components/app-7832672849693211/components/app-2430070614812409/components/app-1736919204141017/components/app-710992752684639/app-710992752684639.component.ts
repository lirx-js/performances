import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-710992752684639',
  standalone: true,
  templateUrl: './app-710992752684639.component.html',
  styleUrl: './app-710992752684639.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App710992752684639Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
