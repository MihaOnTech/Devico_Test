import React from 'react';
import { Button } from 'antd';
import { ReactComponent as MetaMaskIcon } from '../../assets/image/metamask.svg';
import { useWeb3 } from '../providers/Web3Provider';
const ConnectButton = () => {
    const { connectMetaMask, isLoading } = useWeb3();

    return (
        <Button 
            onClick={connectMetaMask} 
            icon={<MetaMaskIcon />}
            shape="circle"
            className='connect-btn'
            style={{
                background: 'none',
                bordr: 'none',
                width: '25px',
                height: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0
            }}
        />
    );
};

export default ConnectButton;
