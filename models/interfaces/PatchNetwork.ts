export type NetworkName = 'linkedin' | 'github';

export interface IPatchNetworkParams {
  userId: string;
  name: NetworkName;
  display: string;
  url: string;
}

export interface INetworkResponse {
  display: string;
  url: string;
}
