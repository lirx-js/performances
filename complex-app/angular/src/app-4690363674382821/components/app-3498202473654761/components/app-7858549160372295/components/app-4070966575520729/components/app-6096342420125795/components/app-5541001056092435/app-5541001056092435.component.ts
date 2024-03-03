import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5541001056092435',
  standalone: true,
  templateUrl: './app-5541001056092435.component.html',
  styleUrl: './app-5541001056092435.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5541001056092435Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
