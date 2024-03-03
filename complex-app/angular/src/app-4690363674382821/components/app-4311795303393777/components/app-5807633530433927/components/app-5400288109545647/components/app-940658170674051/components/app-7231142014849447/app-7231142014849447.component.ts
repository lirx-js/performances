import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7231142014849447',
  standalone: true,
  templateUrl: './app-7231142014849447.component.html',
  styleUrl: './app-7231142014849447.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7231142014849447Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
