import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8513223467429',
  standalone: true,
  templateUrl: './app-8513223467429.component.html',
  styleUrl: './app-8513223467429.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8513223467429Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
