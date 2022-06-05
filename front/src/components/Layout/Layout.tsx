import Navigation from '@components/Navigation'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
