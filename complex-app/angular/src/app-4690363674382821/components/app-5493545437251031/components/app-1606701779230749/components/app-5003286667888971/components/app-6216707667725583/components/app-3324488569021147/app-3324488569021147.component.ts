import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3324488569021147',
  standalone: true,
  templateUrl: './app-3324488569021147.component.html',
  styleUrl: './app-3324488569021147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3324488569021147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
