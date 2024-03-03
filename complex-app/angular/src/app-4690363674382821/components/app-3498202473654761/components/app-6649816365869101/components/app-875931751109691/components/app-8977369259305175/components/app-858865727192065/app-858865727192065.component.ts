import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-858865727192065',
  standalone: true,
  templateUrl: './app-858865727192065.component.html',
  styleUrl: './app-858865727192065.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App858865727192065Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
