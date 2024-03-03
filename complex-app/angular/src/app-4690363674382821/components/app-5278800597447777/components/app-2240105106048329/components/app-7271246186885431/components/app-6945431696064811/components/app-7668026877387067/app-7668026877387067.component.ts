import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7668026877387067',
  standalone: true,
  templateUrl: './app-7668026877387067.component.html',
  styleUrl: './app-7668026877387067.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7668026877387067Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
