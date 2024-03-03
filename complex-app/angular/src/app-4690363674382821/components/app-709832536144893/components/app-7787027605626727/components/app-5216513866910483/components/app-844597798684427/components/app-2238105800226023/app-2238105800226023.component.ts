import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2238105800226023',
  standalone: true,
  templateUrl: './app-2238105800226023.component.html',
  styleUrl: './app-2238105800226023.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2238105800226023Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
