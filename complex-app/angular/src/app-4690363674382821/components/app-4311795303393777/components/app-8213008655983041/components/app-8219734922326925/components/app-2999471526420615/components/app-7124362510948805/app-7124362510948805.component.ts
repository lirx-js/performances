import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7124362510948805',
  standalone: true,
  templateUrl: './app-7124362510948805.component.html',
  styleUrl: './app-7124362510948805.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7124362510948805Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
