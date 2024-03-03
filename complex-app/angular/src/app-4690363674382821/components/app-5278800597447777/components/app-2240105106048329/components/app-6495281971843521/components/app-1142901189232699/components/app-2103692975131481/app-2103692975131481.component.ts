import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2103692975131481',
  standalone: true,
  templateUrl: './app-2103692975131481.component.html',
  styleUrl: './app-2103692975131481.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2103692975131481Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
