import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6567075039490363',
  standalone: true,
  templateUrl: './app-6567075039490363.component.html',
  styleUrl: './app-6567075039490363.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6567075039490363Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
