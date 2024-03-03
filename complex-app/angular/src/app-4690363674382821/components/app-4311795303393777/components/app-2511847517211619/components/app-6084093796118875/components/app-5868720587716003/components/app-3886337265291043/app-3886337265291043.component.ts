import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3886337265291043',
  standalone: true,
  templateUrl: './app-3886337265291043.component.html',
  styleUrl: './app-3886337265291043.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3886337265291043Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
