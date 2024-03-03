import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5051506572480301',
  standalone: true,
  templateUrl: './app-5051506572480301.component.html',
  styleUrl: './app-5051506572480301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5051506572480301Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
