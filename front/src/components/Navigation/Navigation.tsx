import { Grid, GridItem } from '@chakra-ui/react'
import StyledLink from '@components/StyledLink'

const Navigation = () => {
  const activeLink = {
    bg: 'blue.200',
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10} width={'100%'} h={50} mx="auto" bg="blue.400">
      <GridItem>
        <StyledLink href="/" text="home" color="white" _hover={activeLink} />
      </GridItem>
      <GridItem>
        <StyledLink href="/profile" text="profile" color="white" _hover={activeLink} />
      </GridItem>
      <GridItem>
        <StyledLink href="/signup" text="signup" color="white" _hover={activeLink} />
      </GridItem>
    </Grid>
  )
}

export default Navigation
