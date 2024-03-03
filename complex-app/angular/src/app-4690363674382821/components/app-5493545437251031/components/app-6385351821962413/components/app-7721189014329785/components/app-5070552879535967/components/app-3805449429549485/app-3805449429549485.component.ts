import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3805449429549485',
  standalone: true,
  templateUrl: './app-3805449429549485.component.html',
  styleUrl: './app-3805449429549485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3805449429549485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
