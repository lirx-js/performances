import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8728279517786329',
  standalone: true,
  templateUrl: './app-8728279517786329.component.html',
  styleUrl: './app-8728279517786329.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8728279517786329Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
