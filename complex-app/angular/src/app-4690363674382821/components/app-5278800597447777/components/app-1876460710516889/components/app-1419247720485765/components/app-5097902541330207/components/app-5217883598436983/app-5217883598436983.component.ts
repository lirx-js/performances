import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5217883598436983',
  standalone: true,
  templateUrl: './app-5217883598436983.component.html',
  styleUrl: './app-5217883598436983.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5217883598436983Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
