import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-190322944966401',
  standalone: true,
  templateUrl: './app-190322944966401.component.html',
  styleUrl: './app-190322944966401.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App190322944966401Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
