import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5526187961773949',
  standalone: true,
  templateUrl: './app-5526187961773949.component.html',
  styleUrl: './app-5526187961773949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5526187961773949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
