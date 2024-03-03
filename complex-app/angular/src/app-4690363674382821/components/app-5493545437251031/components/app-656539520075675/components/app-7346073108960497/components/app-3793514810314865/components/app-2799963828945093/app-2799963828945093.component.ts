import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2799963828945093',
  standalone: true,
  templateUrl: './app-2799963828945093.component.html',
  styleUrl: './app-2799963828945093.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2799963828945093Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
