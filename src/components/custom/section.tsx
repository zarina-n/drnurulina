import { Separator } from '../ui/separator'

export function Section({
  id,
  title,
  children,
  className = '',
  hideTitle = false,
  noSeparator = false
}: {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
  hideTitle?: boolean
  noSeparator?: boolean
}) {
  return (
    <>
      <section
        id={id}
        className={`mb-4 flex w-full flex-col gap-4 py-5 ${className}`}
      >
        {!hideTitle && title && (
          <div className='text-center'>
            <h2 className='mb-6 inline-block rounded-2xl p-2 px-6 text-center text-3xl font-semibold text-[#c2c6ce] uppercase md:mb-8'>
              {title}
            </h2>
          </div>
        )}
        {children}
      </section>

      {!noSeparator && (
        <Separator className='h-1 rounded-full bg-[#0f1c30] shadow-xl' />
      )}
    </>
  )
}
