import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-592419436218971',
  standalone: true,
  templateUrl: './app-592419436218971.component.html',
  styleUrl: './app-592419436218971.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App592419436218971Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
