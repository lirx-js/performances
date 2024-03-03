import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6910303162721865',
  standalone: true,
  templateUrl: './app-6910303162721865.component.html',
  styleUrl: './app-6910303162721865.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6910303162721865Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
