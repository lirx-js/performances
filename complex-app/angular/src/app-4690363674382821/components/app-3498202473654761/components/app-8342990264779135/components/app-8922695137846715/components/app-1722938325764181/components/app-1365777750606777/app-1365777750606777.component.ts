import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1365777750606777',
  standalone: true,
  templateUrl: './app-1365777750606777.component.html',
  styleUrl: './app-1365777750606777.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1365777750606777Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
