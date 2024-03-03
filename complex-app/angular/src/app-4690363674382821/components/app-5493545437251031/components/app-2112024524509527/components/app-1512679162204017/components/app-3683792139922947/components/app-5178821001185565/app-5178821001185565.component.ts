import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5178821001185565',
  standalone: true,
  templateUrl: './app-5178821001185565.component.html',
  styleUrl: './app-5178821001185565.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5178821001185565Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
