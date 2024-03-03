import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5231938552035289',
  standalone: true,
  templateUrl: './app-5231938552035289.component.html',
  styleUrl: './app-5231938552035289.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5231938552035289Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
