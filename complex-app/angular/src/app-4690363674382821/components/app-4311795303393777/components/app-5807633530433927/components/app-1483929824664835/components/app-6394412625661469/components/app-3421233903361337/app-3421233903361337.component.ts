import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3421233903361337',
  standalone: true,
  templateUrl: './app-3421233903361337.component.html',
  styleUrl: './app-3421233903361337.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3421233903361337Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
