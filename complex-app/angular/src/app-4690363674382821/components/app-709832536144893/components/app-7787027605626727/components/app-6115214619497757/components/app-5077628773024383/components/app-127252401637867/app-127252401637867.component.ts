import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-127252401637867',
  standalone: true,
  templateUrl: './app-127252401637867.component.html',
  styleUrl: './app-127252401637867.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App127252401637867Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
