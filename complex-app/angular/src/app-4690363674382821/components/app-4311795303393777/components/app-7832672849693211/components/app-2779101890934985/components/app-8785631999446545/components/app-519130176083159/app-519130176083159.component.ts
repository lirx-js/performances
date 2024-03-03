import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-519130176083159',
  standalone: true,
  templateUrl: './app-519130176083159.component.html',
  styleUrl: './app-519130176083159.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App519130176083159Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
