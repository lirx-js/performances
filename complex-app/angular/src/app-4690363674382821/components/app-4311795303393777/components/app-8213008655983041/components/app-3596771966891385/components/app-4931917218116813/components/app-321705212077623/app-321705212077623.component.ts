import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-321705212077623',
  standalone: true,
  templateUrl: './app-321705212077623.component.html',
  styleUrl: './app-321705212077623.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App321705212077623Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
