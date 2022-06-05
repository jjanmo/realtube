import { Grid, GridItem, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import StyledLink from '@components/StyledLink'
import { SearchIcon } from '@chakra-ui/icons'

const Navigation = () => {
  const activeLink = {
    bg: 'blue.200',
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={10} width={'100%'} h={50} mx="auto" bg="blue.400">
      <GridItem>
        <StyledLink href="/" text="home" color="white" _hover={activeLink} />
      </GridItem>
      <GridItem>
        <StyledLink href="/profile" text="profile" color="white" _hover={activeLink} />
      </GridItem>
      <GridItem>
        <StyledLink href="/signup" text="signup" color="white" _hover={activeLink} />
      </GridItem>
      <GridItem alignSelf="center" mx={5}>
        <InputGroup>
          <Input
            variant="outline"
            placeholder="Search"
            _placeholder={{ color: 'white' }}
            focusBorderColor={'white'}
            color="white"
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon w={6} h={6} color="white" />
          </InputRightElement>
        </InputGroup>
      </GridItem>
    </Grid>
  )
}

export default Navigation
