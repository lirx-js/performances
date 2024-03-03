import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8382969217534273',
  standalone: true,
  templateUrl: './app-8382969217534273.component.html',
  styleUrl: './app-8382969217534273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8382969217534273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
