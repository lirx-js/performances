import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1070063254700169',
  standalone: true,
  templateUrl: './app-1070063254700169.component.html',
  styleUrl: './app-1070063254700169.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1070063254700169Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
