window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
        const provider = new Web3(window['ethereum'] || window.web3.currentProvider);
        window.web3 = new Web3(provider);
    } else {
        console.log('No Web3 provider detected.');
    }

    const connectWalletButton = document.getElementById('connectWallet');

    connectWalletButton.addEventListener('click', async () => {
        if (window.web3) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await window.web3.eth.getAccounts();
                console.log('Connected account:', accounts[0]);
                alert('Wallet connected: ' + accounts[0]);
            } catch (error) {
                console.error('Failed to connect wallet:', error);
            }
        } else {
            console.error('Web3 not initialized.');
        }
    });
});
