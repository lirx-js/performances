import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5116583441028051',
  standalone: true,
  templateUrl: './app-5116583441028051.component.html',
  styleUrl: './app-5116583441028051.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5116583441028051Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
