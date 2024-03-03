import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8785218346941295',
  standalone: true,
  templateUrl: './app-8785218346941295.component.html',
  styleUrl: './app-8785218346941295.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8785218346941295Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
