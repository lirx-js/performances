import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8870856244282895',
  standalone: true,
  templateUrl: './app-8870856244282895.component.html',
  styleUrl: './app-8870856244282895.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8870856244282895Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
