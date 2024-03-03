import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-949425884074979',
  standalone: true,
  templateUrl: './app-949425884074979.component.html',
  styleUrl: './app-949425884074979.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App949425884074979Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
