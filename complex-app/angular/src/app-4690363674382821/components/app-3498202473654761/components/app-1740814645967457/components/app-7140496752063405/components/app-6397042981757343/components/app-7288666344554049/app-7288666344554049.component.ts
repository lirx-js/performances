import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7288666344554049',
  standalone: true,
  templateUrl: './app-7288666344554049.component.html',
  styleUrl: './app-7288666344554049.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7288666344554049Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
