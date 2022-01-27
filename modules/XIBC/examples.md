# XIBC Usage examples

## cross-chain nft swap

```solidity
// CrossChainNFTSwap base on XIBC basic contracts
contract CrossChainNFTSwap {
    IPacketHandler packetHandler;
    address destNFTSwapContract;
    
    struct NFTSwapArgs {
        address tokenAddress; // ERC20 address
        uint256 amount; // ERC20 amount
        address nftAddress;
        address receiver;
    }
    
    // Wrap 2 cross-chain sub-packet: ERC20-transfer and Conract-Call
    function sendCrossChainNftSwap(address tokenAddress, uint256 amount, address nftAddress, address receiver, 
        string destChain, string relayChain) public {
        // Use destNFTSwapContract address as ERC20 transfer receiver
        ERC20TransferData ERC20Data = wrapERC20Data(tokenAddress, destNFTSwapContract, amount, destChain, relayChain);
        
        bytes args = wrapNFTSwapArgs(nftAddress, receiver);
        ConractCallData conractCallData = wrapConractCallData(destNFTSwapContract, args, destChain, relayChain);
        
        Packet packet = wrapPackets(ERC20Data, conractCallData);
        packetHandler.sendPacket(packet);
    }

    // This function will be callback on cross-chain contract call packet received by CrossChainConractCall
    function swapNFT(address tokenAddress, uint256 amount, address nftAddress, address receiver) public {
        uint256 nftId = matchNFTByERC20(tokenAddress, amount);
        transferNFT(nftId, receiver);
    }
}
```

## cross-chain farm

```solidity
// CrossChainLiquidity example base on XIBC basic contracts
contract CrossChainLiquidity {
    IPacketHandler packetHandler;
    address destLiquidityContract;
    
    struct CrossChainFarmArgs {
        address addressA; // ERC20 A address
        uint256 amountA;  // ERC20 A amount
        address addressB; // ERC20 B address
        uint256 amountB;  // ERC20 B amount
        address receiver;
    }
    
    // Wrap 3 cross-chain sub-packet: ERC20-transfer, ERC20-transfer, Conract-Call
    function sendCrossChainFarm(address addressA, uint256 amountA, address addressB, uint256 amountB, address receiver, 
        string destChain, string relayChain) public {
        // Use destLiquidityContract address as ERC20 transfer receiver
        ERC20TransferData ERC20DataA = wrapERC20Data(addressA, amountA, destLiquidityContract, destChain, relayChain);
        ERC20TransferData ERC20DataB = wrapERC20Data(addressB, amountB, destLiquidityContract, destChain, relayChain);
        
        bytes args = wrapSwapArgs(addressA, amountA, addressB, amountB, receiver);
        ConractCallData conractCallData = wrapConractCallData(destLiquidityContract, args, destChain, relayChain);
        
        Packet packet = wrapPackets(ERC20DataA, ERC20DataB, conractCallData);
        packetHandler.sendPacket(packet);
    }

    // This function will be callback on cross-chain contract call packet received by CrossChainConractCall
    function addLiquidityAndFarm(address addressA, uint256 amountA, address addressB, uint256 amountB, address receiver) public {
        (uint256 lpToken, uint256 lpAmount, uint256 remainingA, uint256 remainingB) = addLiquidity(addressA, amountA, addressB, amountB);
        (uint256 farmToken, uint256 farmAmount) = farm(lpToken, lpAmount);
        
        transferFarmToken(farmToken, ftAmount, farmAmount); // Transfer farm token to receiver
        IERC20(addressA).transfer(receiver, remainingA); // Transfer remaining token A to receiver
        IERC20(addressB).transfer(receiver, remainingB); // Transfer remaining token B to receiver
    }
}
```
