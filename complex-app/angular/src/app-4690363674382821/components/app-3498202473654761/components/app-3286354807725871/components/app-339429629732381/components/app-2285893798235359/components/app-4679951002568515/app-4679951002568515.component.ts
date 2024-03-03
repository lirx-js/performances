import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4679951002568515',
  standalone: true,
  templateUrl: './app-4679951002568515.component.html',
  styleUrl: './app-4679951002568515.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4679951002568515Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
