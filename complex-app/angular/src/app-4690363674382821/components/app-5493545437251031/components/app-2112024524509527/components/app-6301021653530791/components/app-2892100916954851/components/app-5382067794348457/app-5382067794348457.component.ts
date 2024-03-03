import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5382067794348457',
  standalone: true,
  templateUrl: './app-5382067794348457.component.html',
  styleUrl: './app-5382067794348457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5382067794348457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
