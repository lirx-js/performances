import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6769993443799749',
  standalone: true,
  templateUrl: './app-6769993443799749.component.html',
  styleUrl: './app-6769993443799749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6769993443799749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
