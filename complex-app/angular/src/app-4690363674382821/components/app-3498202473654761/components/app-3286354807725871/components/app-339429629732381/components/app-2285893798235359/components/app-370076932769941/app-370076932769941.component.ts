import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-370076932769941',
  standalone: true,
  templateUrl: './app-370076932769941.component.html',
  styleUrl: './app-370076932769941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App370076932769941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
