import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3311605231046935',
  standalone: true,
  templateUrl: './app-3311605231046935.component.html',
  styleUrl: './app-3311605231046935.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3311605231046935Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
