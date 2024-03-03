import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-657485168043047',
  standalone: true,
  templateUrl: './app-657485168043047.component.html',
  styleUrl: './app-657485168043047.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App657485168043047Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
