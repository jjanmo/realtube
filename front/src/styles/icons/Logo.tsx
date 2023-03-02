import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  size: SizeProp
}

export default function Logo({ size }: Props) {
  return <FontAwesomeIcon icon={faKiwiBird} size={size} />
}
