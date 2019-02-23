import { trigger, state, style, transition, animate } from "@angular/animations";


export const uploadAnim = trigger('uploadAnim', [
    state('void', style({'transform': 'translateY(100%)'})),
    state('*', style({'transform': 'translateY(0)'})),
    transition(':enter', animate('.5s ease-in-out')),
    transition(':leave', animate('1s'))
])