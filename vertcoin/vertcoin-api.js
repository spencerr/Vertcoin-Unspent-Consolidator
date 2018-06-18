module.exports = {
    Blockchain: {
        getBestBlockHash: 'getbestblockhash',
        getBlock: 'getblock',
        getBlockchainInfo: 'getblockchaininfo',
        getBlockCount: 'getblockcount',
        getBlockHash: 'getblockhash',
        getBlockHeader: 'getblockheader',
        getChainTips: 'getchaintips',
        getDifficulty: 'getdifficulty',
        getMempoolAncestors: 'getmempoolancestors',
        getMempoolDescendants: 'getmempooldescendants',
        getMempoolEntry: 'getmempoolentry',
        getMempoolInfo: 'getmempoolinfo',
        getRawMempool: 'getrawmempool',
        getTxOut: 'gettxout',
        getTxOutProof: 'gettxoutproof',
        getTxOutSetInfo: 'gettxoutsetinfo',
        preciousBlock: 'preciousblock',
        verifyChain: 'verifychain',
        verifyTxOutProof: 'verifytxoutproof'
    },

    Control: {
        getInfo: 'getinfo',
        getMemoryInfo: 'getmemoryinfo',
        help: 'help',
        stop: 'stop'
    },

    Generating: {
        generate_numBlocks: 'generate numblocks',
        generateToAddress: 'generatetoaddress'
    },

    Mining: {
        getBlockTemplate: 'getblocktemplate',
        getMiningInfo: 'getmininginfo',
        getNetworkHPS: 'getnetworkhashps',
        prioritiseTransaction: 'prioritisetransaction',
        submitBlock: 'submitblock'
    },

    Network: {
        addNode: 'addnode',
        clearBanned: 'clearbanned',
        disconnectNode: 'disconnectnode',
        getAddedNodeInfo: 'getaddednodeinfo',
        getConnectionCount: 'getconnectioncount',
        getNetTotals: 'getnettotals',
        getNetworkInfo: 'getnetworkinfo',
        getPeerInfo: 'getpeerinfo',
        listBanned: 'listbanned',
        ping: 'ping',
        setBan: 'setban',
        setNetworkActive: 'setnetworkactive'
    },

    Transactions: {
        createRawTransaction: 'createrawtransaction',
        decodeRawTransaction: 'decoderawtransaction',
        decodeScript: 'decodescript',
        fundRawTransaction: 'fundrawtransaction',
        getRawTransaction: 'getrawtransaction',
        sendRawTransaction: 'sendrawtransaction',
        signRawTransaction: 'signrawtransaction'
    },

    Util: {
        createMultiSig: 'createmultisig',
        estimateFee: 'estimatefee',
        estimatePriority: 'estimatepriority',
        estimateSmartFee: 'estimatesmartfee',
        estimateSmartPriority: 'estimatesmartpriority',
        signMessageWithPrivKey: 'signmessagewithprivkey',
        validateAddress: 'validateaddress',
        verifyMessage: 'verifymessage'
    },

    Wallet: {
        abandonTransaction: 'abandontransaction',
        addMultiSigAddress: 'addmultisigaddress',
        addWitnessAddress: 'addwitnessaddress',
        backupWallet: 'backupwallet',
        dumpPrivKey: 'dumpprivkey',
        dumpWallet: 'dumpwallet',
        encryptWallet: 'encryptWallet',
        getAccount: 'getaccount',
        getAccountAddress: 'getaccountaddress',
        getAddressesByAccount: 'getaddressesbyaccount',
        getBalance: 'getbalance',
        getNewAddress: 'getnewaddress',
        getRawChangeAddress: 'getrawchangeaddress',
        getReceivedByAccount: 'getreceivedbyaccount',
        getReceivedByAddress: 'getreceivedbyaddress',
        getTransaction: 'gettransaction',
        getUnconfirmedBalance: 'getunconfirmedbalance',
        getWalletInfo: 'getwalletinfo',
        importAddress: 'importaddress',
        importMulti: 'importmulti',
        importPrivKey: 'importprivkey',
        importPrunedFunds: 'importprunedfunds',
        importPubKey: 'importpubkey',
        importWallet: 'importwallet',
        keyPoolRefill: 'keypoolrefill',
        listAccounts: 'listaccounts',
        listAddressGroupings: 'listaddressgroupings',
        listLockUnspent: 'listlockunspent',
        listReceivedByAccount: 'listreceivedbyaccount',
        listReceivedByAddress: 'listreceivedbyaddress',
        listSinceBlock: 'listsinceblock',
        listTransactions: 'listtransactions',
        listUnspent: 'listunspent',
        lockUnspent: 'lockunspent',
        move: 'move',
        removePrunedFunds: 'removeprunedfunds',
        sendFrom: 'sendfrom',
        sendMany: 'sendmany',
        sendToAddress: 'sendtoaddress',
        setAccount: 'setaccount',
        setTxFee: 'settxfee',
        signMessage: 'signmessage',
        walletpassphrase: 'walletpassphrase'
    }
};

/*module.exports = {
    addMultiSigAddress: 'addmultisigaddress',
    addNode: 'addnode',
    backupWallet: 'backupwallet',
    banNode: 'bannode',
    createMultiSig: 'createmultisig',
    createRawTransaction: 'createrawtransaction',
    decodeRawTransaction: 'decoderawtransaction',
    dumpPrivKey: 'dumpprivkey',
    encryptWallet: 'encryptwallet',
    getAccount: 'getaccount',
    getAccountAddress: 'getaccountaddress',
    getAddedNodeInfo: 'getaddednodeinfo',
    getAddressesByAccount: 'getaddressesbyaccount',
    getBalance: 'getbalance',
    getBlock: 'getblock',
    getBlockCount: 'getblockcount',
    getBlockHash: 'getblockhash',
    getBlockTemplate: 'getblocktemplate',
    getConnectionCount: 'getconnectioncount',
    getDifficulty: 'getdifficulty',
    getInfo: 'getinfo',
    getMiningInfo: 'getmininginfo',
    getNewAddress: 'getnewaddress',
    getPeerInfo: 'getpeerinfo',
    getRawMemPool: 'getrawmempool',
    getRawTransaction: 'getrawtransaction',
    getReceivedByAccount: 'getreceivedbyaccount',
    getReceivedByAddress: 'getreceivedbyaddress',
    getTransaction: 'gettransaction',
    getTxOut: 'gettxout',
    getTxOutSetInfo: 'gettxoutsetinfo',
    getWork: 'getwork',
    help: 'help',
    importPrivKey: 'importprivkey',
    keypoolRefill: 'keypoolrefill',
    keyPoolRefill: 'keypoolrefill',
    listAccounts: 'listaccounts',
    listAddressGroupings: 'listaddressgroupings',
    listBannedNodes: 'listbannednodes',
    listLockUnspent: 'listlockunspent',
    listReceivedByAccount: 'listreceivedbyaccount',
    listReceivedByAddress: 'listreceivedbyaddress',
    listSinceBlock: 'listsinceblock',
    listTransactions: 'listtransactions',
    listUnspent: 'listunspent',
    lockUnspent: 'lockunspent',
    move: 'move',
    sendFrom: 'sendfrom',
    sendMany: 'sendmany',
    sendRawTransaction: 'sendrawtransaction',
    sendToAddress: 'sendtoaddress',
    setAccount: 'setaccount',
    setMinInput: 'setmininput',
    setTxFee: 'settxfee',
    signMessage: 'signmessage',
    signRawTransaction: 'signrawtransaction',
    stop: 'stop',
    submitBlock: 'submitblock',
    validateAddress: 'validateaddress',
    verifyMessage: 'verifymessage',
    walletLock: 'walletlock',
    walletPassphrase: 'walletpassphrase',
    walletPassphraseChange: 'walletpassphrasechange'
};*/