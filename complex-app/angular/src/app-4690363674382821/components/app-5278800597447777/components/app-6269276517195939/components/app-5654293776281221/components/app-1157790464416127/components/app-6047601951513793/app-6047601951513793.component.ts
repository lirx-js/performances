import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6047601951513793',
  standalone: true,
  templateUrl: './app-6047601951513793.component.html',
  styleUrl: './app-6047601951513793.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6047601951513793Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
