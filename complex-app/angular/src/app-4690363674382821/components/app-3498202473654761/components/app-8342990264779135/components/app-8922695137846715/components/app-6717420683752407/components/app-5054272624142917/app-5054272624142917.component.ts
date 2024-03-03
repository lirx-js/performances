import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5054272624142917',
  standalone: true,
  templateUrl: './app-5054272624142917.component.html',
  styleUrl: './app-5054272624142917.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5054272624142917Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
