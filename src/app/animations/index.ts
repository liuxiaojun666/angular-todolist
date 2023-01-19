import { animate, trigger, transition, style, keyframes, animation, useAnimation } from '@angular/animations'

export const slideAnimationEnter = animation([
  style({
    opacity: 0,
    transform: 'translateY(40px)'
  }),
  animate(250, style({
    opacity: 1,
    transform: 'translateY(0px)'
  })),
])

export const slideAnimationLeave = animation([
  // animate('500ms 0.1s ease-out', style({
  //   opacity: 0,
  //   transform: 'translateX(100%)'
  // })),
  // 关键帧动画
  animate('{{ duration }} {{ delay }} {{ easing }}', keyframes([
    style({ offset: 0.3, transform: 'translateX(-10px)', opacity: 1 }),
    style({ offset: 0.6, opacity: 0.6 }),
    style({ offset: 1, transform: 'translateX(100%)',opacity: 0 })
  ])),
], {
  params: {
    duration: '500ms',
    delay: '0.1s',
    easing: 'ease-out'
  }
})

export const slideAnimation = trigger('slide', [
  transition(':enter', useAnimation(slideAnimationEnter)),
  transition(':leave', useAnimation(slideAnimationLeave, {
    params: {
      duration: '500ms',
      delay: '80ms',
      easing: 'ease-out'
    }
  })),
])
