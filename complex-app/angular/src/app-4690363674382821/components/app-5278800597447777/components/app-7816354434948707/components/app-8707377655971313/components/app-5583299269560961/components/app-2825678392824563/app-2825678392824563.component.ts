import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2825678392824563',
  standalone: true,
  templateUrl: './app-2825678392824563.component.html',
  styleUrl: './app-2825678392824563.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2825678392824563Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
