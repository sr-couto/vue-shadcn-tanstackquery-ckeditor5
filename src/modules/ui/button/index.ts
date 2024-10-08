import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-default whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  disabled:pointer-events-none disabled:opacity-50 active:opacity-80',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/80 hover:ring-1 ring-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent/80 hover:text-accent-foreground',
        secondary:
          'bg-secondary border border-input text-secondary-foreground hover:ring-1 ring-primary/90 shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-foregorund underline-offset-4 hover:underline',
        success: 'bg-success text-success-foreground shadow-sm hover:bg-success/80 hover:ring-1 ring-success/90',
        warning: 'bg-warning text-warning-foreground shadow-sm hover:bg-warning/80',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded-md px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
