import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7281904663829771',
  standalone: true,
  templateUrl: './app-7281904663829771.component.html',
  styleUrl: './app-7281904663829771.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7281904663829771Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
