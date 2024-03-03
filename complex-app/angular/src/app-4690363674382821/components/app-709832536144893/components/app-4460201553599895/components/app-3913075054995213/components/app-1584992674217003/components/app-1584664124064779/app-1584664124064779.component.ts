import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1584664124064779',
  standalone: true,
  templateUrl: './app-1584664124064779.component.html',
  styleUrl: './app-1584664124064779.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1584664124064779Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
