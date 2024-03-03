import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7625451409514991',
  standalone: true,
  templateUrl: './app-7625451409514991.component.html',
  styleUrl: './app-7625451409514991.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7625451409514991Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
