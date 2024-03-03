import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3487206255965809',
  standalone: true,
  templateUrl: './app-3487206255965809.component.html',
  styleUrl: './app-3487206255965809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3487206255965809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
