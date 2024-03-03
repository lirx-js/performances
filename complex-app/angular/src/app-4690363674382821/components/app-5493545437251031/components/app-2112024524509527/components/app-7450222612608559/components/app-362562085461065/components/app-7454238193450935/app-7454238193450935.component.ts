import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7454238193450935',
  standalone: true,
  templateUrl: './app-7454238193450935.component.html',
  styleUrl: './app-7454238193450935.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7454238193450935Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
