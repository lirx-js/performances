import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2475477796243061',
  standalone: true,
  templateUrl: './app-2475477796243061.component.html',
  styleUrl: './app-2475477796243061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2475477796243061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
