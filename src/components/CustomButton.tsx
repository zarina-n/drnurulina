import { Button } from '@/components/ui/button'

type ButtonVariants =
  | 'secondary'
  | 'link'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | null
  | undefined

export default function CustomButton({
  children,
  asChild = false,
  variant
}: {
  children: React.ReactNode
  asChild?: boolean
  variant?: ButtonVariants
}) {
  return (
    <Button
      asChild={asChild}
      size='lg'
      className={`w-xs cursor-pointer ${variant ? '' : 'bg-violet-400 text-white hover:bg-violet-600'}`}
      variant={variant}
    >
      {children}
    </Button>
  )
}
