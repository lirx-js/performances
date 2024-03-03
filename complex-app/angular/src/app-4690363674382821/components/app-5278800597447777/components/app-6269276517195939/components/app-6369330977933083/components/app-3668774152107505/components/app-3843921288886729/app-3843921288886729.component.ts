import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3843921288886729',
  standalone: true,
  templateUrl: './app-3843921288886729.component.html',
  styleUrl: './app-3843921288886729.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3843921288886729Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
