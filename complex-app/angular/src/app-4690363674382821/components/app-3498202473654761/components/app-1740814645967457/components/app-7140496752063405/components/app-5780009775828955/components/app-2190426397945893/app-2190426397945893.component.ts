import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2190426397945893',
  standalone: true,
  templateUrl: './app-2190426397945893.component.html',
  styleUrl: './app-2190426397945893.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2190426397945893Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
