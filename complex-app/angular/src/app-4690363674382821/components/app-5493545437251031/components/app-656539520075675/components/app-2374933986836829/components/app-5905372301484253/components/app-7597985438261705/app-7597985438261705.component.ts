import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7597985438261705',
  standalone: true,
  templateUrl: './app-7597985438261705.component.html',
  styleUrl: './app-7597985438261705.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7597985438261705Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
