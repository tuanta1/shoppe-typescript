import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

const Input = ({ type, errorMessage, placeholder, className, name, register, rules }: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
