import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8195974910784979',
  standalone: true,
  templateUrl: './app-8195974910784979.component.html',
  styleUrl: './app-8195974910784979.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8195974910784979Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
