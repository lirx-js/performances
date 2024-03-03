import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4553174424845801',
  standalone: true,
  templateUrl: './app-4553174424845801.component.html',
  styleUrl: './app-4553174424845801.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4553174424845801Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
