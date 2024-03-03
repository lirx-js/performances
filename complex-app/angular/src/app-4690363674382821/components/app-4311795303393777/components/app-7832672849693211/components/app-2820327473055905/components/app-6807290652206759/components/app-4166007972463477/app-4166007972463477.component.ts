import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4166007972463477',
  standalone: true,
  templateUrl: './app-4166007972463477.component.html',
  styleUrl: './app-4166007972463477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4166007972463477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
