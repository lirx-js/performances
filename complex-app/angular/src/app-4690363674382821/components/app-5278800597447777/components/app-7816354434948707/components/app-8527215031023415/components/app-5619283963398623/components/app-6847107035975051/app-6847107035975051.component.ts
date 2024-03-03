import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6847107035975051',
  standalone: true,
  templateUrl: './app-6847107035975051.component.html',
  styleUrl: './app-6847107035975051.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6847107035975051Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
