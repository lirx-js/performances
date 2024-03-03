import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6338222011792579',
  standalone: true,
  templateUrl: './app-6338222011792579.component.html',
  styleUrl: './app-6338222011792579.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6338222011792579Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
