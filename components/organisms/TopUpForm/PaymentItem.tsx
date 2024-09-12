import Image from "next/image"

interface PaymentItemProps {
  bankID: string
  type: string
  name: string
}

export default function PaymentItem(props: PaymentItemProps) {
  const { bankID, type, name } = props
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bankID}
    >
      <input
        className="d-none"
        type="radio"
        id={bankID}
        name="paymentMethod"
        value={bankID}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <Image
            src="/icon/check-icon.svg"
            alt="check-icon"
            width={20}
            height={20}
            id="icon-check"
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{name}</p>
      </div>
    </label>
  )
}
