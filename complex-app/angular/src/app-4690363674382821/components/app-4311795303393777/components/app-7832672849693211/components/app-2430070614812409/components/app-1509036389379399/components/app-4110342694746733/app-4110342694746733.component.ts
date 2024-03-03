import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4110342694746733',
  standalone: true,
  templateUrl: './app-4110342694746733.component.html',
  styleUrl: './app-4110342694746733.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4110342694746733Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
