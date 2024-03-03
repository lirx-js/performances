import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7057063704254635',
  standalone: true,
  templateUrl: './app-7057063704254635.component.html',
  styleUrl: './app-7057063704254635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7057063704254635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
