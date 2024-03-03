import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8804069814319363',
  standalone: true,
  templateUrl: './app-8804069814319363.component.html',
  styleUrl: './app-8804069814319363.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8804069814319363Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
