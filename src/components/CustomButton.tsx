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
      className={`w-xs cursor-pointer font-bold md:w-3xs ${variant ? '' : 'bg-[#6680c0] text-white hover:bg-[#0f1c30]'}`}
      variant={variant}
    >
      {children}
    </Button>
  )
}
