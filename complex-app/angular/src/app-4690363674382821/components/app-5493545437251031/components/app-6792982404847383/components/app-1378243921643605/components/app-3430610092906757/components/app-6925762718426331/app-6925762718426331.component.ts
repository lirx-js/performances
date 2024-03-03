import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6925762718426331',
  standalone: true,
  templateUrl: './app-6925762718426331.component.html',
  styleUrl: './app-6925762718426331.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6925762718426331Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
