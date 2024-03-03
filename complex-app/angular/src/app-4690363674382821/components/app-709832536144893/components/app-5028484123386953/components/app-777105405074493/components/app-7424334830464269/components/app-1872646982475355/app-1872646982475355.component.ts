import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1872646982475355',
  standalone: true,
  templateUrl: './app-1872646982475355.component.html',
  styleUrl: './app-1872646982475355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1872646982475355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
