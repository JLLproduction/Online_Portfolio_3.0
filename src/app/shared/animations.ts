import { trigger, state, style, transition, animate, keyframes, AnimationTriggerMetadata, query, stagger } from '@angular/animations';
import { RouterState } from '@angular/router';

export const Animations = {
    animations: [
        trigger('slideIn', [
            transition(':enter', [
                query('li', [
                    style({
                        marginLeft: '-1000px'
                    }),
                    stagger('50ms', [
                        animate('500ms linear', style({ marginLeft: '0' }))
                    ])
                ])
            ])
        ]),
        trigger('picLoad', [
            state('enter', style({
                height: '200px',
                top: '50px',
                left: '{{ halfWidth }}px',
                transform: 'rotate(0)'
            }),
            {
                params: {
                    halfHeight: '0px',
                    halfWidth: '0px'
                }
            }),
            transition('* => enter', [
                style({
                    height: '200px',
                    top: '50px',
                    left: '{{ halfWidth }}px',
                    transform: 'rotateY(90deg)'
                }),
                animate('300ms 200ms')
            ])
        ])
    ]
};
