import { trigger, state, style, transition, animate, keyframes, AnimationTriggerMetadata, query, stagger } from '@angular/animations';

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
        ])
    ]
};
