import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3918135565461287',
  standalone: true,
  templateUrl: './app-3918135565461287.component.html',
  styleUrl: './app-3918135565461287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3918135565461287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
