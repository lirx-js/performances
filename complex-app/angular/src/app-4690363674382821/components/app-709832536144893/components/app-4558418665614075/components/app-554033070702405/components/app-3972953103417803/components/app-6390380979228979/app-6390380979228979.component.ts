import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6390380979228979',
  standalone: true,
  templateUrl: './app-6390380979228979.component.html',
  styleUrl: './app-6390380979228979.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6390380979228979Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
