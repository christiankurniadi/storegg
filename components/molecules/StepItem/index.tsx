interface StepProps {
  src: "step1" | "step2" | "step3"
  title: string
  desc1: string
  desc2: string
}
export default function StepItem(props: StepProps) {
  const { src, title, desc1, desc2 } = props
  return (
    <div className="card feature-card border-0">
      <img
        src={`/icon/${src}.svg`}
        alt=""
        className="mb-30"
        width="80"
        height="80"
      />
      <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
      <p className="text-lg color-palette-1 mb-0">
        {desc1}
        <br />
        {desc2}
      </p>
    </div>
  )
}
