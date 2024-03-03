import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6340904633482401',
  standalone: true,
  templateUrl: './app-6340904633482401.component.html',
  styleUrl: './app-6340904633482401.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6340904633482401Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
