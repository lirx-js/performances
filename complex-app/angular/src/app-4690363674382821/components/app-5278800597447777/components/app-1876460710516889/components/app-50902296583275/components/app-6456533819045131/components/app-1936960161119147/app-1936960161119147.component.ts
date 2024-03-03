import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1936960161119147',
  standalone: true,
  templateUrl: './app-1936960161119147.component.html',
  styleUrl: './app-1936960161119147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1936960161119147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
