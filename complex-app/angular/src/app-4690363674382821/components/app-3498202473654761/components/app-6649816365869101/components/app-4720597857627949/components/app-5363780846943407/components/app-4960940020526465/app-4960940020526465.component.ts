import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4960940020526465',
  standalone: true,
  templateUrl: './app-4960940020526465.component.html',
  styleUrl: './app-4960940020526465.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4960940020526465Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
