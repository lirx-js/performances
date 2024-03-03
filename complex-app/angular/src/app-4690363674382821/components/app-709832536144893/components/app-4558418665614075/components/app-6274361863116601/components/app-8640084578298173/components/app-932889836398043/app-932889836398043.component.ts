import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-932889836398043',
  standalone: true,
  templateUrl: './app-932889836398043.component.html',
  styleUrl: './app-932889836398043.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App932889836398043Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
