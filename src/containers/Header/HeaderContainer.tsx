import Header from "components/Header";
import { MyCoinsContext } from "contexts/MyCoinsContextProvider";
import React, { ReactElement, useContext } from "react";
import { TCoin } from "types/coin";
import { TMyCoinsContext } from "types/providers";
import { getCoins, getCoinsByIds } from "utils/constants/API";
import useRequest from "utils/hooks/useRequest";
import { getCoinsIds } from "utils/services/profile.service";

const HeaderContainer = (): ReactElement => {
  const { coins } = useContext(MyCoinsContext) as TMyCoinsContext;
  const { data: coinsInfo } = useRequest<{ data: TCoin[] }>(
    getCoinsByIds(getCoinsIds(coins))
  );

  const { data: bestCoins } = useRequest<{ data: TCoin[] }>(getCoins(3, 0));

  return (
    <Header
      coins={coinsInfo?.data || []}
      myCoins={coins}
      bestCoins={bestCoins?.data || []}
    />
  );
};

export default HeaderContainer;
