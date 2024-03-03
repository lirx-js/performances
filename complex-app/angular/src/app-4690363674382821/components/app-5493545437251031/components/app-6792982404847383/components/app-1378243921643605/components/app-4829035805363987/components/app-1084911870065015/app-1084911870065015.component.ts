import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1084911870065015',
  standalone: true,
  templateUrl: './app-1084911870065015.component.html',
  styleUrl: './app-1084911870065015.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1084911870065015Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
