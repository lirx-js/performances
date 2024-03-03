import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-192569240354319',
  standalone: true,
  templateUrl: './app-192569240354319.component.html',
  styleUrl: './app-192569240354319.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App192569240354319Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
