import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-297756890749303',
  standalone: true,
  templateUrl: './app-297756890749303.component.html',
  styleUrl: './app-297756890749303.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App297756890749303Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
