import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className= 'flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconsProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconsProps) {
  return(
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
      <input className='flex-1 bg-tansparent text-gray-100 text-xs outline-none  placeholder:text-gray-400'
      {...props}
      />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}