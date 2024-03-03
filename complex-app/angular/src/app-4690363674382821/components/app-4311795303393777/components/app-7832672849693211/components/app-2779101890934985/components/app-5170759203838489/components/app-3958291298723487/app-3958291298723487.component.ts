import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3958291298723487',
  standalone: true,
  templateUrl: './app-3958291298723487.component.html',
  styleUrl: './app-3958291298723487.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3958291298723487Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
