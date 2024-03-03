import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8139342356170215',
  standalone: true,
  templateUrl: './app-8139342356170215.component.html',
  styleUrl: './app-8139342356170215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8139342356170215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
