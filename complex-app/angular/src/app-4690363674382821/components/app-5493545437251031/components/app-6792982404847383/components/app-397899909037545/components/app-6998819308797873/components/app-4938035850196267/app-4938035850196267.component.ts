import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4938035850196267',
  standalone: true,
  templateUrl: './app-4938035850196267.component.html',
  styleUrl: './app-4938035850196267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4938035850196267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
