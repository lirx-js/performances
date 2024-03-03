import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3827614352837501',
  standalone: true,
  templateUrl: './app-3827614352837501.component.html',
  styleUrl: './app-3827614352837501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3827614352837501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
