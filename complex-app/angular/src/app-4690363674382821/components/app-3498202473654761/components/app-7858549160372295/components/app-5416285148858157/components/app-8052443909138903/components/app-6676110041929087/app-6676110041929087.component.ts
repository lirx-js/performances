import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6676110041929087',
  standalone: true,
  templateUrl: './app-6676110041929087.component.html',
  styleUrl: './app-6676110041929087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6676110041929087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
