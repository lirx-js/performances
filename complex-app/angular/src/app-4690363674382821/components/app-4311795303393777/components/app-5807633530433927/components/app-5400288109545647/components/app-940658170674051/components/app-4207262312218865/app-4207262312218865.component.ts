import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4207262312218865',
  standalone: true,
  templateUrl: './app-4207262312218865.component.html',
  styleUrl: './app-4207262312218865.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4207262312218865Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
