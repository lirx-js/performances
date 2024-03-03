import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3239212244172893',
  standalone: true,
  templateUrl: './app-3239212244172893.component.html',
  styleUrl: './app-3239212244172893.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3239212244172893Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
