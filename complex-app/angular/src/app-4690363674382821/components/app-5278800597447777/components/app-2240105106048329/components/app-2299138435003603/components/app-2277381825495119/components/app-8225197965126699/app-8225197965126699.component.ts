import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8225197965126699',
  standalone: true,
  templateUrl: './app-8225197965126699.component.html',
  styleUrl: './app-8225197965126699.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8225197965126699Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
