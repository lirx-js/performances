import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4348794464626645',
  standalone: true,
  templateUrl: './app-4348794464626645.component.html',
  styleUrl: './app-4348794464626645.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4348794464626645Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
