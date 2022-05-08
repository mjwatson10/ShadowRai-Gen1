import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";
import whitelistAddresses2 from "./whitelist2.json";

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "ShadowRaiNFT",
  tokenName: "Shadow Rai",
  tokenSymbol: "SR",
  hiddenMetadataUri:
    "ipfs://QmV111qru6ijQHv7rkau7hb8TLmrzu9xeoei6CDN3bEB2m/preview.json",
  maxSupply: 500,
  whitelistSale: {
    price: 0.063,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.063,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.063,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0xc3895B590b75f92B2578bC29306EE82000D5AAd7",
  marketplaceIdentifier: "ShadowRai",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
  whitelistAddresses2,
};

export default CollectionConfig;
