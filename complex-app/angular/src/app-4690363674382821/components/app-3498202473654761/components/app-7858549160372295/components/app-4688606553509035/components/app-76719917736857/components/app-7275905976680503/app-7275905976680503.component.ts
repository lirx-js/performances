import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7275905976680503',
  standalone: true,
  templateUrl: './app-7275905976680503.component.html',
  styleUrl: './app-7275905976680503.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7275905976680503Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
