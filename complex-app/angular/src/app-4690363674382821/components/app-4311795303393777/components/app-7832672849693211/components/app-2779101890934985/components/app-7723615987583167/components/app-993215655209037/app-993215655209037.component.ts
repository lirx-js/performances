import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-993215655209037',
  standalone: true,
  templateUrl: './app-993215655209037.component.html',
  styleUrl: './app-993215655209037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App993215655209037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
