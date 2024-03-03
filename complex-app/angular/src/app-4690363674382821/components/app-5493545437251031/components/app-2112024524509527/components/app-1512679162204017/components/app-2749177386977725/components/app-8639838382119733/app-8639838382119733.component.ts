import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8639838382119733',
  standalone: true,
  templateUrl: './app-8639838382119733.component.html',
  styleUrl: './app-8639838382119733.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8639838382119733Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
