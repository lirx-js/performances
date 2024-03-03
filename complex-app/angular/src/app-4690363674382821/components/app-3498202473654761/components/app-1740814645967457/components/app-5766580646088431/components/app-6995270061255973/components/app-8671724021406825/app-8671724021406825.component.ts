import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8671724021406825',
  standalone: true,
  templateUrl: './app-8671724021406825.component.html',
  styleUrl: './app-8671724021406825.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8671724021406825Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
