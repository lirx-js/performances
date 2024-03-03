import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-136454657740267',
  standalone: true,
  templateUrl: './app-136454657740267.component.html',
  styleUrl: './app-136454657740267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App136454657740267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}