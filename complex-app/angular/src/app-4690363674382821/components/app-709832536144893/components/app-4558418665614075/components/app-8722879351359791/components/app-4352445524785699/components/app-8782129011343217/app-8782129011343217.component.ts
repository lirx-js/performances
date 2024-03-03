import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8782129011343217',
  standalone: true,
  templateUrl: './app-8782129011343217.component.html',
  styleUrl: './app-8782129011343217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8782129011343217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
