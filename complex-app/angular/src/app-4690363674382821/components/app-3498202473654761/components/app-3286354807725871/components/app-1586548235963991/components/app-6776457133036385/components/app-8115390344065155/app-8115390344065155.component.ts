import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8115390344065155',
  standalone: true,
  templateUrl: './app-8115390344065155.component.html',
  styleUrl: './app-8115390344065155.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8115390344065155Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
