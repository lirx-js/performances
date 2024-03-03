import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1027990137090591',
  standalone: true,
  templateUrl: './app-1027990137090591.component.html',
  styleUrl: './app-1027990137090591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1027990137090591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
