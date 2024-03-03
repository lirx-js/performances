import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8935673571965981',
  standalone: true,
  templateUrl: './app-8935673571965981.component.html',
  styleUrl: './app-8935673571965981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8935673571965981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
