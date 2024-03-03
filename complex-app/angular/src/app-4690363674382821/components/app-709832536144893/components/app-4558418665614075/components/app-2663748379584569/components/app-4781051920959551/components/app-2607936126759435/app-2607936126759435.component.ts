import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2607936126759435',
  standalone: true,
  templateUrl: './app-2607936126759435.component.html',
  styleUrl: './app-2607936126759435.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2607936126759435Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
