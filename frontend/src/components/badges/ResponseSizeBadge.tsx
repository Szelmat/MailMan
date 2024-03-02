export const ResponseSizeBadge = (props: { size: {
  Sum: number,
  Header: number,
  Body: number,
}}) => {
  return (
    <div className="tooltip font-mono tooltip-bottom whitespace-pre" data-tip={
        `Response: ${props.size.Sum} KB\n` +
        `Header: ${props.size.Header} KB\n` +
        `Body: ${props.size.Body} KB`
    }>
      <span className="badge badge-sm font-mono">{props.size.Sum ?? 0} KB</span>
    </div>
  )
}

