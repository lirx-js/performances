import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6994085446697803',
  standalone: true,
  templateUrl: './app-6994085446697803.component.html',
  styleUrl: './app-6994085446697803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6994085446697803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
