import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4479214053367223',
  standalone: true,
  templateUrl: './app-4479214053367223.component.html',
  styleUrl: './app-4479214053367223.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4479214053367223Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
