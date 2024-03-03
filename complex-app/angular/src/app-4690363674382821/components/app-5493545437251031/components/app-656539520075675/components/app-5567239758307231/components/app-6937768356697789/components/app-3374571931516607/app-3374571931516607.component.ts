import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3374571931516607',
  standalone: true,
  templateUrl: './app-3374571931516607.component.html',
  styleUrl: './app-3374571931516607.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3374571931516607Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
