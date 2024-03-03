import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6270311673336117',
  standalone: true,
  templateUrl: './app-6270311673336117.component.html',
  styleUrl: './app-6270311673336117.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6270311673336117Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
