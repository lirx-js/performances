import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7724334903540701',
  standalone: true,
  templateUrl: './app-7724334903540701.component.html',
  styleUrl: './app-7724334903540701.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7724334903540701Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
