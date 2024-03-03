import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7660752255081527',
  standalone: true,
  templateUrl: './app-7660752255081527.component.html',
  styleUrl: './app-7660752255081527.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7660752255081527Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
