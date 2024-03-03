import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4406611636020911',
  standalone: true,
  templateUrl: './app-4406611636020911.component.html',
  styleUrl: './app-4406611636020911.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4406611636020911Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
