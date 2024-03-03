import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5562155666363893',
  standalone: true,
  templateUrl: './app-5562155666363893.component.html',
  styleUrl: './app-5562155666363893.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5562155666363893Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
