import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4053952044973925',
  standalone: true,
  templateUrl: './app-4053952044973925.component.html',
  styleUrl: './app-4053952044973925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4053952044973925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
