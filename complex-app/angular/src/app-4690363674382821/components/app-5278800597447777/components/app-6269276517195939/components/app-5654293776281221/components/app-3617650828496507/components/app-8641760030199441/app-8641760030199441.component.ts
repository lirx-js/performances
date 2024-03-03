import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8641760030199441',
  standalone: true,
  templateUrl: './app-8641760030199441.component.html',
  styleUrl: './app-8641760030199441.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8641760030199441Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
