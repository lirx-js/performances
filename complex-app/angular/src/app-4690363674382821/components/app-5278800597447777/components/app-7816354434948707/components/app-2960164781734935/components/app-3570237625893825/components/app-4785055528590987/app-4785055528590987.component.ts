import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4785055528590987',
  standalone: true,
  templateUrl: './app-4785055528590987.component.html',
  styleUrl: './app-4785055528590987.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4785055528590987Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
