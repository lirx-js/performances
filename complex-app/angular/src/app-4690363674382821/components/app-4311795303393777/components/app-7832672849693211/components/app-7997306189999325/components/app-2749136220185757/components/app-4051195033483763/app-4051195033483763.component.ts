import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4051195033483763',
  standalone: true,
  templateUrl: './app-4051195033483763.component.html',
  styleUrl: './app-4051195033483763.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4051195033483763Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
