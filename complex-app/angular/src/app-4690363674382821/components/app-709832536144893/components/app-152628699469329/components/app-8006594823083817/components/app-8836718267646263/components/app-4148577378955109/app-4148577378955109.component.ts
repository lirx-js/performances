import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4148577378955109',
  standalone: true,
  templateUrl: './app-4148577378955109.component.html',
  styleUrl: './app-4148577378955109.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4148577378955109Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
