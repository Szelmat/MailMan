import { Status } from "../../types/http";

enum COLOR_CLASSES {
  DEFAULT = 'neutral',
  INFO = 'info',
  SUCCESS = 'success',
  REDIRECT = 'warning',
  ERROR = 'error',
}

const getColorClass = (code: number | null) => {
  if(!code) {
    return COLOR_CLASSES.DEFAULT;
  } else if (code >= 400) {
    return COLOR_CLASSES.ERROR;
  } else if (code >= 300) {
    return COLOR_CLASSES.REDIRECT;
  } else if (code >= 200) {
    return COLOR_CLASSES.SUCCESS;
  } else if (code >= 100) {
    return COLOR_CLASSES.INFO;
  }
}

export const ResponseCodeBadge = (props: { status: Status }) => {
  const statusCodeClass = getColorClass(props.status.Code);

  return (
    <div className={`tooltip tooltip-${statusCodeClass} tooltip-bottom font-mono`} data-tip={props.status.Message}>
      <div className={`badge badge-md badge-${statusCodeClass} badge-outline font-mono`}>
        {props.status.Code ? props.status.Code : "000"}
      </div>
    </div>
  )
}

