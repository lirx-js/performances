import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3114989584411155',
  standalone: true,
  templateUrl: './app-3114989584411155.component.html',
  styleUrl: './app-3114989584411155.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3114989584411155Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
