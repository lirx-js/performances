import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3638965839559741',
  standalone: true,
  templateUrl: './app-3638965839559741.component.html',
  styleUrl: './app-3638965839559741.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3638965839559741Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
