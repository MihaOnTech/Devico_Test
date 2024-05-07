## 1. Fix Singup and Login problems

- Changed URLs to LocalHost.
- Fixed Database Connection.
- Removed useless import in index.html. Resource doesn't exist.
- Fixed email service. Provided credentials not working. I got acces to a private domain email to open a SMTP2GO account.
- Fixed SQL query. Missing comma on column declaration and changed top_tokens name column length to 20 to get rid of error.
- Removed TS notation on UserProvider.
- Changed default chain to Polygon mainnet to close loading state. Connection to BSC network not working.
#### Possible Improvements
- Lots of warnings from not used but declared vars, duplicated keys, missing hrefs....
- UseEffect functions on Wallet.js should implement useCallback from react.
- Should not use yarn and npm package modules, just one or the other.
- Fix BSC chain connection

## 2. Implement web3 wallet connection

#### 2.1 I thought the assignment was to integrate the provided app with WalletConnect, but this is not possible using Node v16.

- I tried all kinds of fixes and adaptations but its not possible to run on old versions of Node or React

- Errors installing required dependencies because of Node version
````
npm i @walletconnect/web3wallet @walletconnect/core @walletconnect/utils
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'clipboardy@4.0.0',      
npm WARN EBADENGINE   required: { node: '>=18' },       
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: 
'8.19.4' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'is64bit@2.0.0',
npm WARN EBADENGINE   required: { node: '>=18' },       
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: 
'8.19.4' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'system-architecture@0.1.0',
npm WARN EBADENGINE   required: { node: '>=18' },       
npm WARN EBADENGINE   current: { node: 'v16.20.2', npm: 
'8.19.4' }
npm WARN EBADENGINE }

````

- Implementation of WalletConnect Modal on a new ReactApp using Vite. Needed Node v18 and React v18. This implementation allows to connect ANY wallet. A deployment of the project can be found at https://walletconnect-devico.vercel.app/

#### 2.2 Implemeting Metamask wallet connection

- Added Web3 Metamask Provider as a wrapper of App.js which can be used anywhere on app.
- Added a Metamask connect button on the profile page ( Wallet.js). Didn't know where to put it exactly.
- No functionality added, it just prints connected account in console. 
