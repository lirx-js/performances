import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-267706081804595',
  standalone: true,
  templateUrl: './app-267706081804595.component.html',
  styleUrl: './app-267706081804595.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App267706081804595Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
