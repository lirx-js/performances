import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3238322584470765',
  standalone: true,
  templateUrl: './app-3238322584470765.component.html',
  styleUrl: './app-3238322584470765.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3238322584470765Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
