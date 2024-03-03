import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7902668921779811',
  standalone: true,
  templateUrl: './app-7902668921779811.component.html',
  styleUrl: './app-7902668921779811.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7902668921779811Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
