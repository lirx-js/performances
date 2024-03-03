import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7489707470394913',
  standalone: true,
  templateUrl: './app-7489707470394913.component.html',
  styleUrl: './app-7489707470394913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7489707470394913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
