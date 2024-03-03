import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8556655323797875',
  standalone: true,
  templateUrl: './app-8556655323797875.component.html',
  styleUrl: './app-8556655323797875.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8556655323797875Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
