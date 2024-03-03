import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7960510308780449',
  standalone: true,
  templateUrl: './app-7960510308780449.component.html',
  styleUrl: './app-7960510308780449.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7960510308780449Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
