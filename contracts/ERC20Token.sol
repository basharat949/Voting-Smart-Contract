// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Token is ERC20, Ownable {
    
    constructor(uint256 initialAmount) ERC20("ERC20Token", "Token") {
        _mint(_msgSender(), initialAmount);
        Ownable(_msgSender());
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
