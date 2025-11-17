// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FlyToken is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 10_000_000 ether;
    uint256 public constant MIN_SUPPLY = 2_000_000 ether;
    uint256 public burnRateBasisPoints = 100; // 1% burn (100 basis points = 1%)

    constructor() ERC20("FlyToken", "FLY") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function _update(address from, address to, uint256 amount) internal override {
        if (from != address(0) && to != address(0)) {
            uint256 supply = totalSupply();
            uint256 burnAmount = 0;
            if (supply > MIN_SUPPLY) {
                burnAmount = (amount * burnRateBasisPoints) / 10_000;
                if (supply - burnAmount < MIN_SUPPLY) {
                    burnAmount = supply - MIN_SUPPLY;
                }
            }
            if (burnAmount > 0) {
                super._update(from, address(0), burnAmount); // burn
            }
            super._update(from, to, amount - burnAmount); // remainder transfers
        } else {
            // mint or burn
            super._update(from, to, amount);
        }
    }
}
