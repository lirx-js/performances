import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2013216056790433',
  standalone: true,
  templateUrl: './app-2013216056790433.component.html',
  styleUrl: './app-2013216056790433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2013216056790433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
