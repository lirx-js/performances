import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6271622354368823',
  standalone: true,
  templateUrl: './app-6271622354368823.component.html',
  styleUrl: './app-6271622354368823.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6271622354368823Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
