import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-686140662152975',
  standalone: true,
  templateUrl: './app-686140662152975.component.html',
  styleUrl: './app-686140662152975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App686140662152975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
