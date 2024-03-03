import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-371866916886263',
  standalone: true,
  templateUrl: './app-371866916886263.component.html',
  styleUrl: './app-371866916886263.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App371866916886263Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
