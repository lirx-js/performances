import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4998972403482775',
  standalone: true,
  templateUrl: './app-4998972403482775.component.html',
  styleUrl: './app-4998972403482775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4998972403482775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
