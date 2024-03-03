import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3991955972473165',
  standalone: true,
  templateUrl: './app-3991955972473165.component.html',
  styleUrl: './app-3991955972473165.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3991955972473165Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
