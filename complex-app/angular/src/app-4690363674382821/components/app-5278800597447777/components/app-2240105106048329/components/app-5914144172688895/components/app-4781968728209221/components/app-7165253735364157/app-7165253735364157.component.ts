import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7165253735364157',
  standalone: true,
  templateUrl: './app-7165253735364157.component.html',
  styleUrl: './app-7165253735364157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7165253735364157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
