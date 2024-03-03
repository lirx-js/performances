import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6699786711578105',
  standalone: true,
  templateUrl: './app-6699786711578105.component.html',
  styleUrl: './app-6699786711578105.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6699786711578105Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
