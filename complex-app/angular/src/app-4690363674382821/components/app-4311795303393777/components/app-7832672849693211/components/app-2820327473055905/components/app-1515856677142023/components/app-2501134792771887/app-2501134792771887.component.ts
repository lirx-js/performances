import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2501134792771887',
  standalone: true,
  templateUrl: './app-2501134792771887.component.html',
  styleUrl: './app-2501134792771887.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2501134792771887Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
