import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2476781288205907',
  standalone: true,
  templateUrl: './app-2476781288205907.component.html',
  styleUrl: './app-2476781288205907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2476781288205907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
