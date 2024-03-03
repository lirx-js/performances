import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8740291362657291',
  standalone: true,
  templateUrl: './app-8740291362657291.component.html',
  styleUrl: './app-8740291362657291.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8740291362657291Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
