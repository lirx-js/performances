import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3697955258765689',
  standalone: true,
  templateUrl: './app-3697955258765689.component.html',
  styleUrl: './app-3697955258765689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3697955258765689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
