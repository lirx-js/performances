import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7918749947682427',
  standalone: true,
  templateUrl: './app-7918749947682427.component.html',
  styleUrl: './app-7918749947682427.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7918749947682427Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
