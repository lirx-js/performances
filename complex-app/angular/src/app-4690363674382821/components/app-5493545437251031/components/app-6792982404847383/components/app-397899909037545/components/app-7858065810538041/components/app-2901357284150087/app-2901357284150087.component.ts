import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2901357284150087',
  standalone: true,
  templateUrl: './app-2901357284150087.component.html',
  styleUrl: './app-2901357284150087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2901357284150087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
