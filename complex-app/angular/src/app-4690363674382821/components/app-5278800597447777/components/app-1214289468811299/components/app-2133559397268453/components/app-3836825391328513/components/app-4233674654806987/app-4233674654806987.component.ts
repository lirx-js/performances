import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4233674654806987',
  standalone: true,
  templateUrl: './app-4233674654806987.component.html',
  styleUrl: './app-4233674654806987.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4233674654806987Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
