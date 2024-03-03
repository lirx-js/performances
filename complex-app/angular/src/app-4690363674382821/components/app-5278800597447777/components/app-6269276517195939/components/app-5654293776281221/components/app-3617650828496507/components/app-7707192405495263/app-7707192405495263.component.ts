import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7707192405495263',
  standalone: true,
  templateUrl: './app-7707192405495263.component.html',
  styleUrl: './app-7707192405495263.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7707192405495263Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
