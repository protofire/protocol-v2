/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ILendingRateOracleInterface extends Interface {
  functions: {
    getMarketBorrowRate: TypedFunctionDescription<{
      encode([_asset]: [string]): string;
    }>;

    setMarketBorrowRate: TypedFunctionDescription<{
      encode([_asset, _rate]: [string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class ILendingRateOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ILendingRateOracle;
  attach(addressOrName: string): ILendingRateOracle;
  deployed(): Promise<ILendingRateOracle>;

  on(event: EventFilter | string, listener: Listener): ILendingRateOracle;
  once(event: EventFilter | string, listener: Listener): ILendingRateOracle;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ILendingRateOracle;
  removeAllListeners(eventName: EventFilter | string): ILendingRateOracle;
  removeListener(eventName: any, listener: Listener): ILendingRateOracle;

  interface: ILendingRateOracleInterface;

  functions: {
    getMarketBorrowRate(_asset: string): Promise<BigNumber>;

    setMarketBorrowRate(
      _asset: string,
      _rate: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  getMarketBorrowRate(_asset: string): Promise<BigNumber>;

  setMarketBorrowRate(
    _asset: string,
    _rate: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    getMarketBorrowRate(_asset: string): Promise<BigNumber>;

    setMarketBorrowRate(
      _asset: string,
      _rate: BigNumberish
    ): Promise<BigNumber>;
  };
}