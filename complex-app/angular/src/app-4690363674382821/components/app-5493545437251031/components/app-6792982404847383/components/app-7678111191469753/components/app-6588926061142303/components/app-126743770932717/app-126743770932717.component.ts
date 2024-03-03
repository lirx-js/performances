import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-126743770932717',
  standalone: true,
  templateUrl: './app-126743770932717.component.html',
  styleUrl: './app-126743770932717.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App126743770932717Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
