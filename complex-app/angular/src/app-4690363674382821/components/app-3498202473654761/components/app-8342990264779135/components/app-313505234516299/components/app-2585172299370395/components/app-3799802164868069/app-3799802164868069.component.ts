import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3799802164868069',
  standalone: true,
  templateUrl: './app-3799802164868069.component.html',
  styleUrl: './app-3799802164868069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3799802164868069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
