import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3971913847684651',
  standalone: true,
  templateUrl: './app-3971913847684651.component.html',
  styleUrl: './app-3971913847684651.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3971913847684651Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
