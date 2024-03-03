import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5076976868424521',
  standalone: true,
  templateUrl: './app-5076976868424521.component.html',
  styleUrl: './app-5076976868424521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5076976868424521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
