import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-613447903589229',
  standalone: true,
  templateUrl: './app-613447903589229.component.html',
  styleUrl: './app-613447903589229.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App613447903589229Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
