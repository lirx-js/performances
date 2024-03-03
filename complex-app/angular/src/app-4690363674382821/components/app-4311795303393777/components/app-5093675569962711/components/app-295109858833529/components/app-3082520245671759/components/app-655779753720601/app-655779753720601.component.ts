import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-655779753720601',
  standalone: true,
  templateUrl: './app-655779753720601.component.html',
  styleUrl: './app-655779753720601.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App655779753720601Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
