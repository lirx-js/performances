import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3140800290179931',
  standalone: true,
  templateUrl: './app-3140800290179931.component.html',
  styleUrl: './app-3140800290179931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3140800290179931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
