# Getting Started with the Data Extraction on Blockchain
___ 

## Requirements
- [NodeJs](https://nodejs.org/en) for the JavaScript environment
- [Express](https://expressjs.com/) for the backend
- [React](https://react.dev/) and [Material UI](https://mui.com/material-ui/) for the frontend
- A [MongoDB](https://www.mongodb.com/) istance
- API key of [Etherscan](https://etherscan.io/apis)
- API key of [PolygonScan API](https://polygonscan.com/apis)
- API key of a Web3 Provider like [Infura](https://www.infura.io/) or [Alchemy](https://www.alchemy.com/)

___

## How to run

In the same folder you have two projects:

```
BlockchainExtraction_backend 
```
and
```
BlockchainExtraction_frontend
```


### Backend

Go in the `.env` file in the root folder of `BlockchainExtraction_backend` and insert your API keys:

```
WEB3_ALCHEMY_MAINNET_URL=https://eth-mainnet.g.alchemy.com/v2/<alchemy_api>
WEB3_ALCHEMY_SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/<alchemy_api>
WEB3_ALCHEMY_POLYGON_URL=https://polygon-mainnet.g.alchemy.com/v2/<alchemy_api>
WEB3_ALCHEMY_AMOY_URL=https://polygon-amoy.g.alchemy.com/v2/<alchemy_api>

API_KEY_ETHERSCAN=<etherscan_api>
ETHERSCAN_MAINNET_ENDPOINT=https://api.etherscan.io/api
ETHERSCAN_SEPOLIA_ENDPOINT=https://api-sepolia.etherscan.io/api
API_KEY_POLYGONSCAN=<polyscan_api>
POLYGONSCAN_MAINNET_ENDPOINT=https://api.polygonscan.com/api
POLYGONSCAN_TESTNET_ENDPOINT=https://api-testnet.polygonscan.com/api

MONGODB_URL=<connection_string> (usually mongodb://127.0.0.1:27017 or mongodb://localhost:27017)
LOG_DB_NAME=backlog

```
In this case the Alchemy provider has been used, but you are free to use whatever you want for the Web3 provider.

Then, run:
```
npm install
```

### Frontend
Also here run:
```
npm install
```

and
```
npm run start
```

This script will execute Express backend and React frontend together.

> [!WARNING]
> According to the `package.json` in `BlockchainExtraction_frontend` both Frontend and Backend project must be in a same folder and they must keep these names: **BlockchainExtraction_frontend** and **BlockchainExtraction_backend**. If you want to change the path of the projects or their names you must update the `start script` in the `package.json` of `BlockchainExtraction_frontend`.
