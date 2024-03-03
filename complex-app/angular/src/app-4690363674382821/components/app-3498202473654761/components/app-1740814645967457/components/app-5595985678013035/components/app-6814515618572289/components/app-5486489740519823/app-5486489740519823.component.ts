import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5486489740519823',
  standalone: true,
  templateUrl: './app-5486489740519823.component.html',
  styleUrl: './app-5486489740519823.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5486489740519823Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
