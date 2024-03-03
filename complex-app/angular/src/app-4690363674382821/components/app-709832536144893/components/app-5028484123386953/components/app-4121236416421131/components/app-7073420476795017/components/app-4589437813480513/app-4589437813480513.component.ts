import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4589437813480513',
  standalone: true,
  templateUrl: './app-4589437813480513.component.html',
  styleUrl: './app-4589437813480513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4589437813480513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
