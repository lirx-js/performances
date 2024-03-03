import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8104735499590019',
  standalone: true,
  templateUrl: './app-8104735499590019.component.html',
  styleUrl: './app-8104735499590019.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8104735499590019Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
