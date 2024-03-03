import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3057221103023735',
  standalone: true,
  templateUrl: './app-3057221103023735.component.html',
  styleUrl: './app-3057221103023735.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3057221103023735Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
