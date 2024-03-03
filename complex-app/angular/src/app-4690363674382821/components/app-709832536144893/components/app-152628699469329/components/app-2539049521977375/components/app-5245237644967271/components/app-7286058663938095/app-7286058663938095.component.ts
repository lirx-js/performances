import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7286058663938095',
  standalone: true,
  templateUrl: './app-7286058663938095.component.html',
  styleUrl: './app-7286058663938095.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7286058663938095Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
