import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2248492653682621',
  standalone: true,
  templateUrl: './app-2248492653682621.component.html',
  styleUrl: './app-2248492653682621.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2248492653682621Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
