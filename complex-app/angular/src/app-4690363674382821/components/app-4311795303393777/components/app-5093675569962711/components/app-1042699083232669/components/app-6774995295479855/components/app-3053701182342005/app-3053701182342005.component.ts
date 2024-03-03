import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3053701182342005',
  standalone: true,
  templateUrl: './app-3053701182342005.component.html',
  styleUrl: './app-3053701182342005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3053701182342005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
