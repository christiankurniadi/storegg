interface InputTextProps {
  label: string
  //   placeholder: string
  //   id: string
  //   name: string
  //   htmlFor: string
  //   describedBy: string
}

export default function InputText(props: InputTextProps) {
  const {
    label,
    ...NativeProps
    // placeholder, id, name, htmlFor, describedBy
  } = props
  return (
    <>
      <div className="pt-30">
        <label
          htmlFor="name"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          {label}
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          {...NativeProps}
        />
      </div>
    </>
  )
}

/* </div> <div className="pt-30">
        <label
          htmlFor={htmlFor}
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          {label}
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id={id}
          name={name}
          aria-describedby={describedBy}
          placeholder={placeholder}
        />
      </div> */
