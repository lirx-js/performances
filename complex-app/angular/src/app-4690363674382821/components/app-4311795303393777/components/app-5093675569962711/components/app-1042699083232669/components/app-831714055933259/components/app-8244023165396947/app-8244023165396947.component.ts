import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8244023165396947',
  standalone: true,
  templateUrl: './app-8244023165396947.component.html',
  styleUrl: './app-8244023165396947.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8244023165396947Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
