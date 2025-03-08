import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-in', style({ opacity: 1 }))
  ])
]);

export const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(20px)', opacity: 0 }),
    animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger('100ms', [
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('600ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ])
]); 