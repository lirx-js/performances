import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3880846894105525',
  standalone: true,
  templateUrl: './app-3880846894105525.component.html',
  styleUrl: './app-3880846894105525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3880846894105525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
