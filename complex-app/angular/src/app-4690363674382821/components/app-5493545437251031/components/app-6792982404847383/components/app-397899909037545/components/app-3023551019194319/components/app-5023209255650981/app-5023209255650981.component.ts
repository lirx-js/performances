import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5023209255650981',
  standalone: true,
  templateUrl: './app-5023209255650981.component.html',
  styleUrl: './app-5023209255650981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5023209255650981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
