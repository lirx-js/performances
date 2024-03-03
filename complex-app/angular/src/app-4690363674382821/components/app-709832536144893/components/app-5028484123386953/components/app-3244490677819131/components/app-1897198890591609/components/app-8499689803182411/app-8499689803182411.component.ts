import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8499689803182411',
  standalone: true,
  templateUrl: './app-8499689803182411.component.html',
  styleUrl: './app-8499689803182411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8499689803182411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
