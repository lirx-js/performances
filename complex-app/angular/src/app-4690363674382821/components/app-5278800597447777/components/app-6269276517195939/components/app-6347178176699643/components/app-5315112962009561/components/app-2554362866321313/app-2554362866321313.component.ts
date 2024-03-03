import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2554362866321313',
  standalone: true,
  templateUrl: './app-2554362866321313.component.html',
  styleUrl: './app-2554362866321313.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2554362866321313Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
