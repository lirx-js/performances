import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1204910976653705',
  standalone: true,
  templateUrl: './app-1204910976653705.component.html',
  styleUrl: './app-1204910976653705.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1204910976653705Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
