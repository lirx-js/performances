import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3927123138633561',
  standalone: true,
  templateUrl: './app-3927123138633561.component.html',
  styleUrl: './app-3927123138633561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3927123138633561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
