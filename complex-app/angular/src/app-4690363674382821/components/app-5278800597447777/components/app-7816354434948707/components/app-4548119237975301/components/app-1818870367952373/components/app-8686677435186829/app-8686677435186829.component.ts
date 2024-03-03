import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8686677435186829',
  standalone: true,
  templateUrl: './app-8686677435186829.component.html',
  styleUrl: './app-8686677435186829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8686677435186829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
