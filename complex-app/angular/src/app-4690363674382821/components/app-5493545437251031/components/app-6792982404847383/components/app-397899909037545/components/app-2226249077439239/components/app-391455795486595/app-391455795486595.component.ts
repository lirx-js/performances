import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-391455795486595',
  standalone: true,
  templateUrl: './app-391455795486595.component.html',
  styleUrl: './app-391455795486595.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App391455795486595Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
