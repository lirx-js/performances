import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2275445790309845',
  standalone: true,
  templateUrl: './app-2275445790309845.component.html',
  styleUrl: './app-2275445790309845.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2275445790309845Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
