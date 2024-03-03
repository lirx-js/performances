import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-278390437151281',
  standalone: true,
  templateUrl: './app-278390437151281.component.html',
  styleUrl: './app-278390437151281.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App278390437151281Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
