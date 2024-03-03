import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8104906618517855',
  standalone: true,
  templateUrl: './app-8104906618517855.component.html',
  styleUrl: './app-8104906618517855.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8104906618517855Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
