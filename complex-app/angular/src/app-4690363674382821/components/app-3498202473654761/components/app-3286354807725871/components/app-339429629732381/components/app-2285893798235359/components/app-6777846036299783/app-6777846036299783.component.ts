import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6777846036299783',
  standalone: true,
  templateUrl: './app-6777846036299783.component.html',
  styleUrl: './app-6777846036299783.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6777846036299783Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
