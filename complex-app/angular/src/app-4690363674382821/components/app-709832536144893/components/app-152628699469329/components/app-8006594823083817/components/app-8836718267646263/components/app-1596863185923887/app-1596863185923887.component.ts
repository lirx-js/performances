import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1596863185923887',
  standalone: true,
  templateUrl: './app-1596863185923887.component.html',
  styleUrl: './app-1596863185923887.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1596863185923887Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
