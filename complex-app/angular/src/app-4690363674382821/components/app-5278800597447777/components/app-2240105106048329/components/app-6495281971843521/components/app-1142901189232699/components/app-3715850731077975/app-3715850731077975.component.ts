import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3715850731077975',
  standalone: true,
  templateUrl: './app-3715850731077975.component.html',
  styleUrl: './app-3715850731077975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3715850731077975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
