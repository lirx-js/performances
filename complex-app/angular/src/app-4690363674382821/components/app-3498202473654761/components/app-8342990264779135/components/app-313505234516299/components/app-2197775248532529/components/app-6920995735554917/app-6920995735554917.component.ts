import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6920995735554917',
  standalone: true,
  templateUrl: './app-6920995735554917.component.html',
  styleUrl: './app-6920995735554917.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6920995735554917Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
