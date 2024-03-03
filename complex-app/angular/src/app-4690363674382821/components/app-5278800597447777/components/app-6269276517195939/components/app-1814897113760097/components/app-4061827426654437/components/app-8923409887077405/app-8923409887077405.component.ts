import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8923409887077405',
  standalone: true,
  templateUrl: './app-8923409887077405.component.html',
  styleUrl: './app-8923409887077405.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8923409887077405Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
