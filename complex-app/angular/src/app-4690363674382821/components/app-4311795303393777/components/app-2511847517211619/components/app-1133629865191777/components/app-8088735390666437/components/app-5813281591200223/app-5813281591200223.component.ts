import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5813281591200223',
  standalone: true,
  templateUrl: './app-5813281591200223.component.html',
  styleUrl: './app-5813281591200223.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5813281591200223Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
