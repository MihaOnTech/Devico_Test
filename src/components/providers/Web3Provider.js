import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                try {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setAccounts(accounts);
                } catch (error) {
                    console.error('Error accessing accounts:', error);
                }
            } else {
                console.error('MetaMask is not installed!');
            }
            setIsLoading(false);
        };

        loadWeb3();
    }, []);

    useEffect(() => {
        window.ethereum.on('accountsChanged', (accounts) => {
            setAccounts(accounts);
        });

        window.ethereum.on('chainChanged', (_) => {
            window.location.reload();
        });
    }, []);

    return (
        <Web3Context.Provider value={{ web3, accounts, isLoading }}>
            {children}
        </Web3Context.Provider>
    );
};

export const useWeb3 = () => useContext(Web3Context);
