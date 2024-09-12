interface StatsProps {
  category: string
  data: string
}

export default function Stats(props: StatsProps) {
  const { category, data } = props
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {data}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {category}
      </p>
    </div>
  )
}
