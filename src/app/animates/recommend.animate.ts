import { trigger, state, style, transition, animate } from "@angular/animations";


export const commentAnim = trigger('commentAnim', [
    state('hide', style({'transform': 'translateY(100%)'})),
    state('show', style({'transform': 'translateY(0)'})),
    transition('hide => show', animate('2s')),
    transition('show => hide', animate('.1s'))
])