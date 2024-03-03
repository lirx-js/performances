import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3097902740623285',
  standalone: true,
  templateUrl: './app-3097902740623285.component.html',
  styleUrl: './app-3097902740623285.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3097902740623285Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
