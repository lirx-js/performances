import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-178795747164287',
  standalone: true,
  templateUrl: './app-178795747164287.component.html',
  styleUrl: './app-178795747164287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App178795747164287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
