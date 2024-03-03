import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3810092775082007',
  standalone: true,
  templateUrl: './app-3810092775082007.component.html',
  styleUrl: './app-3810092775082007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3810092775082007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
