import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2034536392629981',
  standalone: true,
  templateUrl: './app-2034536392629981.component.html',
  styleUrl: './app-2034536392629981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2034536392629981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
