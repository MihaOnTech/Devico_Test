import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const connectMetaMask = async () => {
        if (window.ethereum) {
            setIsLoading(true);
            try {
                console.log("Connect Metamask")
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3Instance = new Web3(window.ethereum);
                console.log("Web3 Instance: ", web3Instance)
                const accounts = await web3Instance.eth.getAccounts();
                console.log("Accounts: ", accounts);
                setWeb3(web3Instance);
                setAccounts(accounts);
            } catch (error) {
                console.error('Error accessing accounts:', error);
            }
            setIsLoading(false);
        } else {
            console.error('MetaMask is not installed!');
        }
    };

    useEffect(() => {
        window.ethereum?.on('accountsChanged', (accounts) => {
            setAccounts(accounts);
        });

        window.ethereum?.on('chainChanged', () => {
            window.location.reload();
        });
    }, []);

    return (
        <Web3Context.Provider value={{ web3, accounts, isLoading, connectMetaMask }}>
            {children}
        </Web3Context.Provider>
    );
};

export const useWeb3 = () => useContext(Web3Context);
