import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-128923914438975',
  standalone: true,
  templateUrl: './app-128923914438975.component.html',
  styleUrl: './app-128923914438975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App128923914438975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
