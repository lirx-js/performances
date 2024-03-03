import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5407556873023977',
  standalone: true,
  templateUrl: './app-5407556873023977.component.html',
  styleUrl: './app-5407556873023977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5407556873023977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
