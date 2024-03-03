import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3463941697600851',
  standalone: true,
  templateUrl: './app-3463941697600851.component.html',
  styleUrl: './app-3463941697600851.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3463941697600851Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
