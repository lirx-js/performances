import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4888061068239781',
  standalone: true,
  templateUrl: './app-4888061068239781.component.html',
  styleUrl: './app-4888061068239781.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4888061068239781Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
