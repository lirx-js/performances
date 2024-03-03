import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2724867526630495',
  standalone: true,
  templateUrl: './app-2724867526630495.component.html',
  styleUrl: './app-2724867526630495.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2724867526630495Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
