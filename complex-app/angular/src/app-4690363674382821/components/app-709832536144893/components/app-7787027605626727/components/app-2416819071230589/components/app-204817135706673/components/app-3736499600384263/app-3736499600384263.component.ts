import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3736499600384263',
  standalone: true,
  templateUrl: './app-3736499600384263.component.html',
  styleUrl: './app-3736499600384263.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3736499600384263Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
