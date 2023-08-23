// Initially, just set up Web3
if (window.ethereum) {
    window.web3 = new Web3(ethereum);
} else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
} else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Enable the mint button only after wallet is connected
            document.getElementById("mintButton").disabled = false;
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log('No web3? You should consider trying MetaMask!');
    }
}

async function sendEther() {
    const accounts = await web3.eth.getAccounts();
    const recipientAddress = '0xe6004226BC1F1ba37E5C2c4689693b94B863cd58';
    const amountToSend = web3.utils.toWei("0.002", "ether");

    try {
        const transaction = await web3.eth.sendTransaction({
            from: accounts[0],
            to: recipientAddress,
            value: amountToSend
        });
        console.log("Transaction: ", transaction);
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

// Initially disable the Mint button until the wallet is connected
document.getElementById("mintButton").disabled = true;

// Add Event Listener to the Connect Wallet Button
document.getElementById("connectButton").addEventListener("click", connectWallet);

// Add Event Listener to the Mint Button
document.getElementById("mintButton").addEventListener("click", sendEther);

