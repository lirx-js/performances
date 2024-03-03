import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-754028041808057',
  standalone: true,
  templateUrl: './app-754028041808057.component.html',
  styleUrl: './app-754028041808057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App754028041808057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
