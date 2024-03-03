import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6325402427551071',
  standalone: true,
  templateUrl: './app-6325402427551071.component.html',
  styleUrl: './app-6325402427551071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6325402427551071Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
