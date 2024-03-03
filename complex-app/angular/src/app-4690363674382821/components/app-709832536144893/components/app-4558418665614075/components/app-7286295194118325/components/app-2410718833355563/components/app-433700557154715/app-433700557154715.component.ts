import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-433700557154715',
  standalone: true,
  templateUrl: './app-433700557154715.component.html',
  styleUrl: './app-433700557154715.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App433700557154715Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
