// SPDX-License-Identifier: MIT
pragma solidity >0.4.23 <0.9.0;

import "./Escrow.sol";

contract EscrowFactory {

    Escrow[] private _escrowsArray;

    function createEscrow() public {
        Escrow escrow = new Escrow();
        _escrowsArray.push(escrow);
    }

   function get_Address_At_Index(uint _index) public view returns (address) {
        return address(_escrowsArray[_index]);
    }

}