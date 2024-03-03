import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3512226622798685',
  standalone: true,
  templateUrl: './app-3512226622798685.component.html',
  styleUrl: './app-3512226622798685.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3512226622798685Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
