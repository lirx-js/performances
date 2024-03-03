import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5922764636298003',
  standalone: true,
  templateUrl: './app-5922764636298003.component.html',
  styleUrl: './app-5922764636298003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5922764636298003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
