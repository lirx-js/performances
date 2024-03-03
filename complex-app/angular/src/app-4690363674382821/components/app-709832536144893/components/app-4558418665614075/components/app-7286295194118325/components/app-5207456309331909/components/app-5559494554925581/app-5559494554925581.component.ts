import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5559494554925581',
  standalone: true,
  templateUrl: './app-5559494554925581.component.html',
  styleUrl: './app-5559494554925581.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5559494554925581Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
