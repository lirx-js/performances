import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-462512506550905',
  standalone: true,
  templateUrl: './app-462512506550905.component.html',
  styleUrl: './app-462512506550905.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App462512506550905Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
