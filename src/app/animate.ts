import {animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-10%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0s ease-out', style({
        opacity: 0
      }))
    ])
  ]);
