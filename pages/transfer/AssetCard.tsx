import styled from 'styled-components'
import { colorTokens, spaces } from '../../util/constants'
import { Text } from 'components/Text'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/outline'
import { Button } from '../../components/Button'
import { CardWithSeparator } from '../../components/CardWithSeparator'
import { IconWrapper } from '../../components/IconWrapper'

export const AssetCard = ({ tokenInfo: { name, symbol } }) => {
  return (
    <CardWithSeparator>
      {[
        <>
          <StyledHeader>
            <StyledTokenAvatar />
            <StyledHeaderTextWrapper>
              <Text type="heading">{symbol}</Text>
              <Text type="body" variant="light">
                {name} mainnet
              </Text>
            </StyledHeaderTextWrapper>
          </StyledHeader>
        </>,
        <>
          <Text paddingY={spaces[18]} type="caption" color="gray">
            Current balance
          </Text>
          <StyledBalanceWrapper>
            <Text type="title">34.3343</Text>
            <Text type="caption" paddingY="6px" paddingX="6px">
              {symbol}
            </Text>
          </StyledBalanceWrapper>
          <Text type="subtitle" variant="light">
            $116.33
          </Text>

          <StyledButtonsWrapper>
            <Button
              size="small"
              iconBefore={
                <IconWrapper
                  icon={<ArrowDownIcon />}
                  color={colorTokens.white}
                />
              }
            >
              Deposit
            </Button>
            <Button
              size="small"
              iconBefore={
                <IconWrapper icon={<ArrowUpIcon />} color={colorTokens.white} />
              }
            >
              Withdraw
            </Button>
          </StyledButtonsWrapper>
        </>,
      ]}
    </CardWithSeparator>
  )
}

const StyledButtonsWrapper = styled.div`
  display: grid;
  column-gap: 8px;
  grid-template-columns: 1fr 1fr;
  padding-top: 33px;
`

const StyledBalanceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${spaces[24]};
`

const StyledHeaderTextWrapper = styled.div`
  padding-left: ${spaces[18]};
`

const StyledTokenAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
`
