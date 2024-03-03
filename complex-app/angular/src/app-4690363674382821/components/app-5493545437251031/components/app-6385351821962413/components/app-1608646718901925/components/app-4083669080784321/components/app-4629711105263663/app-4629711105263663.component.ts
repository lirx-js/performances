import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4629711105263663',
  standalone: true,
  templateUrl: './app-4629711105263663.component.html',
  styleUrl: './app-4629711105263663.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4629711105263663Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
