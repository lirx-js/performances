import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-782936484729001',
  standalone: true,
  templateUrl: './app-782936484729001.component.html',
  styleUrl: './app-782936484729001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App782936484729001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
