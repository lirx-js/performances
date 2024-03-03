import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2419187737930297',
  standalone: true,
  templateUrl: './app-2419187737930297.component.html',
  styleUrl: './app-2419187737930297.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2419187737930297Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
