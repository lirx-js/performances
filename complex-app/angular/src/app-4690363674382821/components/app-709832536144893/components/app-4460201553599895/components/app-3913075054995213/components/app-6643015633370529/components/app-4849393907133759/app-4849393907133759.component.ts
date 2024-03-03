import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4849393907133759',
  standalone: true,
  templateUrl: './app-4849393907133759.component.html',
  styleUrl: './app-4849393907133759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4849393907133759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
