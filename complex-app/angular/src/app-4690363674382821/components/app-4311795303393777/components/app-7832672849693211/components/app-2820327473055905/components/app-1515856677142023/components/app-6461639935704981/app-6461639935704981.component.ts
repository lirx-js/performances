import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6461639935704981',
  standalone: true,
  templateUrl: './app-6461639935704981.component.html',
  styleUrl: './app-6461639935704981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6461639935704981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
