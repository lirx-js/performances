import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4017188750050887',
  standalone: true,
  templateUrl: './app-4017188750050887.component.html',
  styleUrl: './app-4017188750050887.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4017188750050887Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
