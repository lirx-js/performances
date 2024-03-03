import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-159087554344845',
  standalone: true,
  templateUrl: './app-159087554344845.component.html',
  styleUrl: './app-159087554344845.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App159087554344845Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
