import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8409004920484757',
  standalone: true,
  templateUrl: './app-8409004920484757.component.html',
  styleUrl: './app-8409004920484757.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8409004920484757Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
