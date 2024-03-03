import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4589474555203345',
  standalone: true,
  templateUrl: './app-4589474555203345.component.html',
  styleUrl: './app-4589474555203345.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4589474555203345Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
