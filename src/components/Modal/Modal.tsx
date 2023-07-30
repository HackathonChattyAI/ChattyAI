import { FC, MouseEvent, PropsWithChildren, useCallback, useEffect } from "react"
import scrollLock from "../../utils/scrollLock"
import styles from "./Modal.module.scss"

type Props = {
  visible: boolean
  handleClose: () => void
  outSideClickEnable?: boolean
} & PropsWithChildren

const Modal: FC<Props> = props => {
  const { visible, handleClose, children, outSideClickEnable = false } = props

  const onkeyup = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      handleClose()
    }
  }

  useEffect(() => {
    if (visible) {
      window.addEventListener("keyup", onkeyup)
      scrollLock.enable()
    } else {
      window.removeEventListener("keyup", onkeyup)
    }
    return () => scrollLock.disable()
  }, [visible])

  const handleOutSideClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { target, currentTarget } = event
      if (target === currentTarget && outSideClickEnable) handleClose()
    },
    [handleClose],
  )

  if (!visible) return null

  return (
    <div onClick={handleOutSideClick} className={styles.modal}>
      {children}
    </div>
  )
}

export default Modal
