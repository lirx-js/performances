import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4132824034289381',
  standalone: true,
  templateUrl: './app-4132824034289381.component.html',
  styleUrl: './app-4132824034289381.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4132824034289381Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
