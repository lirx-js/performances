import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8804361255346211',
  standalone: true,
  templateUrl: './app-8804361255346211.component.html',
  styleUrl: './app-8804361255346211.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8804361255346211Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
