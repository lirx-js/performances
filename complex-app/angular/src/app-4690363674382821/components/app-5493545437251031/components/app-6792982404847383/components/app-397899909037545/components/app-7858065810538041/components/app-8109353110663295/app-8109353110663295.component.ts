import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8109353110663295',
  standalone: true,
  templateUrl: './app-8109353110663295.component.html',
  styleUrl: './app-8109353110663295.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8109353110663295Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
