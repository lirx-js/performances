import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4437206045396815',
  standalone: true,
  templateUrl: './app-4437206045396815.component.html',
  styleUrl: './app-4437206045396815.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4437206045396815Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
