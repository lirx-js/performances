import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-956749856580659',
  standalone: true,
  templateUrl: './app-956749856580659.component.html',
  styleUrl: './app-956749856580659.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App956749856580659Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
