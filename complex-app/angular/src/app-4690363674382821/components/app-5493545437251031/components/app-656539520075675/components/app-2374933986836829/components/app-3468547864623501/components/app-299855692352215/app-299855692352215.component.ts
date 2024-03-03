import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-299855692352215',
  standalone: true,
  templateUrl: './app-299855692352215.component.html',
  styleUrl: './app-299855692352215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App299855692352215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
