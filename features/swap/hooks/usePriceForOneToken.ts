import { usePersistance } from 'hooks/usePersistance'

import { useTokenToTokenPrice } from './useTokenToTokenPrice'

export const usePriceForOneToken = ({ tokenASymbol, tokenBSymbol }) => {
  const [currentTokenPrice, isPriceLoading] = useTokenToTokenPrice({
    tokenASymbol: tokenASymbol,
    tokenBSymbol: tokenBSymbol,
    tokenAmount: 1,
  })

  const persistPrice = usePersistance(
    isPriceLoading ? undefined : currentTokenPrice
  )

  return [persistPrice, isPriceLoading] as const
}
