import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3044582380287217',
  standalone: true,
  templateUrl: './app-3044582380287217.component.html',
  styleUrl: './app-3044582380287217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3044582380287217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
