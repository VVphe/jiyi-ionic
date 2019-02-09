import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterScrollService {
  private lastPosition: [number, number] = [0, 200];
  private lastScrollTime = 0;

  constructor(router: Router, private viewportScroller: ViewportScroller) {
      console.log(router.events);
    router.events.pipe(filter(e => e instanceof Scroll))
      .subscribe((e: Scroll) => {
          console.log(e);
        const pos = e.position || [0, 200];
        this.lastPosition = pos;
        this.lastScrollTime = Date.now();
        viewportScroller.scrollToPosition(pos);
      });
  }

  async componentLoaded() {
    console.log(111, this.lastPosition, this.lastScrollTime);
    const d = Date.now();
    if (d - this.lastScrollTime < 10000) {
      this.lastScrollTime = d;
      // wait for browser complete re-layout
      await Promise.resolve();
      this.viewportScroller.scrollToPosition(this.lastPosition);
    }
  }
}