import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-953323388619077',
  standalone: true,
  templateUrl: './app-953323388619077.component.html',
  styleUrl: './app-953323388619077.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App953323388619077Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
