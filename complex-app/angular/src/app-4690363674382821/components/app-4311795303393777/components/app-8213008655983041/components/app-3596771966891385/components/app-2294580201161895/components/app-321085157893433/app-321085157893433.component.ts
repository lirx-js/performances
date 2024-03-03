import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-321085157893433',
  standalone: true,
  templateUrl: './app-321085157893433.component.html',
  styleUrl: './app-321085157893433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App321085157893433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
