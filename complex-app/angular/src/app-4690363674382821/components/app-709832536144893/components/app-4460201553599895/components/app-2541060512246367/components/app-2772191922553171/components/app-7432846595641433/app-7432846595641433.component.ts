import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7432846595641433',
  standalone: true,
  templateUrl: './app-7432846595641433.component.html',
  styleUrl: './app-7432846595641433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7432846595641433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
