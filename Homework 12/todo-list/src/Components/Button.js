import Spinner from "./Spinner"

export default function Button({
  variant = 'primary',
  onClick,
  className,
  type,
  loading = false,
  disabled = false,
  children
}) {
  return (
    <button
      className={'button btn btn-' + variant + ' ' + className}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {children}

      {
        loading ?
          <div className='button-spinner'>
            <Spinner />
          </div>
          :
          <></>
      }
    </button>
  )
}