import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4550792355734129',
  standalone: true,
  templateUrl: './app-4550792355734129.component.html',
  styleUrl: './app-4550792355734129.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4550792355734129Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
