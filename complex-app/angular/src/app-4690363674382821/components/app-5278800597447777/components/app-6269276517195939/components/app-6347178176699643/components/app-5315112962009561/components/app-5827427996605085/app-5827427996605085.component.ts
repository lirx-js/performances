import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5827427996605085',
  standalone: true,
  templateUrl: './app-5827427996605085.component.html',
  styleUrl: './app-5827427996605085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5827427996605085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
