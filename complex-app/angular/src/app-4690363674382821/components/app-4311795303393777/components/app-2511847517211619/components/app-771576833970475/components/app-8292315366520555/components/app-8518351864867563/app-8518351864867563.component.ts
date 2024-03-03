import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8518351864867563',
  standalone: true,
  templateUrl: './app-8518351864867563.component.html',
  styleUrl: './app-8518351864867563.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8518351864867563Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
