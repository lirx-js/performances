import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8796084738874347',
  standalone: true,
  templateUrl: './app-8796084738874347.component.html',
  styleUrl: './app-8796084738874347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8796084738874347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
