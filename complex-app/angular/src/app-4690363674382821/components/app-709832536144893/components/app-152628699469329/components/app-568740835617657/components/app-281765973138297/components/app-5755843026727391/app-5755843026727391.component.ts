import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5755843026727391',
  standalone: true,
  templateUrl: './app-5755843026727391.component.html',
  styleUrl: './app-5755843026727391.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5755843026727391Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
