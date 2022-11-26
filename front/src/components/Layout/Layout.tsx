import GNB from '@components/GNB'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <GNB />
      {children}
    </div>
  )
}

export default Layout
