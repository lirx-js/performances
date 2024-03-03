import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-524187561627825',
  standalone: true,
  templateUrl: './app-524187561627825.component.html',
  styleUrl: './app-524187561627825.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App524187561627825Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
