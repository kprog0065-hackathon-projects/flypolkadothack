// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FlyNFT is ERC1155, Ownable {
    IERC20 public immutable flyToken;
    uint256 public constant CAPUCINES_BAG = 1;
    uint256 public constant DIONYSUS_BAG = 2;
    uint256 public constant SAC_DE_JOUR = 3;
    uint256 public constant PUMPS = 4;
    uint256 public constant SANDALS = 5;
    uint256 public constant BOOTS = 6;
    uint256 public constant DIOR_RTW = 7;
    uint256 public constant SL_PINK_RTW = 8;
    uint256 public constant GUCCI_YELLOW_RTW = 9;

    // Fly price per fraction (ERC20 decimals, usually 18)
    mapping(uint256 => uint256) public pricePerFraction;

    constructor(string memory uri, address flyTokenAddress) ERC1155(uri) Ownable(msg.sender) {
        flyToken = IERC20(flyTokenAddress);

        // Mint all to contract itself for sale
        _mint(address(this), CAPUCINES_BAG, 100, "");
        _mint(address(this), DIONYSUS_BAG, 100, "");
        _mint(address(this), SAC_DE_JOUR, 100, "");
        _mint(address(this), PUMPS, 150, "");
        _mint(address(this), SANDALS, 150, "");
        _mint(address(this), BOOTS, 200, "");
        _mint(address(this), DIOR_RTW, 200, "");
        _mint(address(this), SL_PINK_RTW, 200, "");
        _mint(address(this), GUCCI_YELLOW_RTW, 200, "");

        // Set initial prices in 18 decimals (e.g. 50 * 1e18 = 50 FLY)
        pricePerFraction[CAPUCINES_BAG] = 70 ether;
        pricePerFraction[DIONYSUS_BAG] = 30 ether;
        pricePerFraction[SAC_DE_JOUR] = 35 ether;
        pricePerFraction[PUMPS] = 22 ether;
        pricePerFraction[SANDALS] = 21 ether;
        pricePerFraction[BOOTS] = 25 ether;
        pricePerFraction[DIOR_RTW] = 50 ether;
        pricePerFraction[SL_PINK_RTW] = 65 ether;
        pricePerFraction[GUCCI_YELLOW_RTW] = 55 ether;
    }

    function setPrice(uint256 id, uint256 newPrice) external onlyOwner {
        pricePerFraction[id] = newPrice;
    }

    function buyFraction(uint256 id, uint256 amount) external {
        require(amount > 0, "Must buy at least one fraction");
        uint256 totalPrice = pricePerFraction[id] * amount;
        require(balanceOf(address(this), id) >= amount, "Not enough fractions");

        // Transfer Fly tokens from buyer and burn them using the Fly Token contract
        require(flyToken.transferFrom(msg.sender, address(this), totalPrice), "Fly payment failed");

        // Deliver NFTs
        _safeTransferFrom(address(this), msg.sender, id, amount, "");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }
}
