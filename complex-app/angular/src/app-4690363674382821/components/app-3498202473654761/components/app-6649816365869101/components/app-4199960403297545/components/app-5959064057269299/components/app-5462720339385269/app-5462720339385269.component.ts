import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5462720339385269',
  standalone: true,
  templateUrl: './app-5462720339385269.component.html',
  styleUrl: './app-5462720339385269.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5462720339385269Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
