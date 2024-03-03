import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4157607695325451',
  standalone: true,
  templateUrl: './app-4157607695325451.component.html',
  styleUrl: './app-4157607695325451.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4157607695325451Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
