import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-40074091546525',
  standalone: true,
  templateUrl: './app-40074091546525.component.html',
  styleUrl: './app-40074091546525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App40074091546525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
