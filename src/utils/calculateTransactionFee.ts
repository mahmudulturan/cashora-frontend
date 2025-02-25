const calculateTransactionFee = (amount: number, type: 'send_money' | 'cash_out'): number => {
    if (type === 'send_money') {
        return amount > 100 ? 5 : 0;
    } else if (type === 'cash_out') {
        return amount * 0.015;
    }

    return 0;
};

export default calculateTransactionFee;
