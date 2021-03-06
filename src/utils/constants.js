const IS_MAINNET = process.env.REACT_APP_NETWORK === 'mainnet';

const CONTRACTS = IS_MAINNET
  ? {
    TRVL_TOKEN: '0x389985C31c91bE3a7f4f78953ff1F9fC2f237e75',
    THOMAS_NFT: '0x1a5bc29581598b7cd95d334096e5f607839a7b39',
  } : {
    TRVL_TOKEN: '0x389985C31c91bE3a7f4f78953ff1F9fC2f237e75',
    THOMAS_NFT: '0x1a5bc29581598b7cd95d334096e5f607839a7b39',
  }


const HTTP_PROVIDER_URL = IS_MAINNET ? "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" : "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

export {
  IS_MAINNET,
  CONTRACTS,
  HTTP_PROVIDER_URL
}
