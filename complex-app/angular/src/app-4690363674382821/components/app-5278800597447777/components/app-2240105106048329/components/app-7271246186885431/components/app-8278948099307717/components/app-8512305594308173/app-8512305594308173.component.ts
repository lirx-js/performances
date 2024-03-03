import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8512305594308173',
  standalone: true,
  templateUrl: './app-8512305594308173.component.html',
  styleUrl: './app-8512305594308173.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8512305594308173Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
