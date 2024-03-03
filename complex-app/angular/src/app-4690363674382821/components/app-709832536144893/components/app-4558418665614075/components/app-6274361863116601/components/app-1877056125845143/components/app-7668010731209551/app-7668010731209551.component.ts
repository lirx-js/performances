import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7668010731209551',
  standalone: true,
  templateUrl: './app-7668010731209551.component.html',
  styleUrl: './app-7668010731209551.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7668010731209551Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
