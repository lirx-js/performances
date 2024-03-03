import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-799121704645019',
  standalone: true,
  templateUrl: './app-799121704645019.component.html',
  styleUrl: './app-799121704645019.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App799121704645019Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
