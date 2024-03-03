import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7818713594197337',
  standalone: true,
  templateUrl: './app-7818713594197337.component.html',
  styleUrl: './app-7818713594197337.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7818713594197337Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
