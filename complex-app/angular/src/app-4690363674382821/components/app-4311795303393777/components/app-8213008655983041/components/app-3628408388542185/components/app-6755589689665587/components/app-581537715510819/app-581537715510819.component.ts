import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-581537715510819',
  standalone: true,
  templateUrl: './app-581537715510819.component.html',
  styleUrl: './app-581537715510819.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App581537715510819Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
