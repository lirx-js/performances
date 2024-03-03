import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5520029726965623',
  standalone: true,
  templateUrl: './app-5520029726965623.component.html',
  styleUrl: './app-5520029726965623.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5520029726965623Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
