import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7072689739105017',
  standalone: true,
  templateUrl: './app-7072689739105017.component.html',
  styleUrl: './app-7072689739105017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7072689739105017Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
