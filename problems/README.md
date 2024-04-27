# Problems with other Decentralized Data Storage Solutions





## Lack of Incentives and Sustainability in IPFS
A potential solution is decentralizing storage, as seen with IPFS, where much NFT content is hosted. However, ensuring data hosting quality in a fully decentralized environment is challenging. Networks like IPFS are designed for data sharing rather than storage. While some users voluntarily store data, the system is not sustainable as it lacks incentives to ensure work quality.


## Storage proof can not be uploaded on Smart Contracts
To confirm that storage providers have indeed stored users' data, they need to upload a storage proof to the blockchain or an EVM. However, uploading a conventional storage proof to an EVM can be impractical due to high gas fees and slow speeds. This is why other decentralized data storage solutions like **Filecoin** and **Arweave** require their own Layer 1 to customize gas fees.

## Data withholding and data availability problems
Decentralized data storage platforms such as **Filecoin** and **Arweave** face the **Data withholding problem**: providers may store data and submit data storage proofs while not sending the data to users. 

In **Sia**, users have to pay tips to storage providers per download to incentivize data delivery. This approach can be very costly and inconvenient because users have to pay each time they want to retrieve their data. 

