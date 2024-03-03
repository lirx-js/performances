import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5543520581293037',
  standalone: true,
  templateUrl: './app-5543520581293037.component.html',
  styleUrl: './app-5543520581293037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5543520581293037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
