import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPendingTxn {
  readonly txHash: string
  readonly type: string
}

const initialState: Array<IPendingTxn> = []

const pendingTxnsSlice = createSlice({
  name: 'pendingTransactions',
  initialState,
  reducers: {
    fetchPendingTxns(state, action: PayloadAction<IPendingTxn>) {
      state.push(action.payload)
    },
    clearPendingTxn(state, action: PayloadAction<string>) {
      const target = state.find((x) => x.txHash === action.payload)
      if (target) {
        state.splice(state.indexOf(target), 1)
      }
    },
  },
})

export const isPendingTxn = (
  pendingTransactions: IPendingTxn[],
  type: string
) => {
  return pendingTransactions.map((x) => x.type).includes(type)
}

export const txnButtonText = (
  pendingTransactions: IPendingTxn[],
  type: string,
  defaultText: string
) => {
  return isPendingTxn(pendingTransactions, type) ? 'Pending...' : defaultText
}

export const { fetchPendingTxns, clearPendingTxn } = pendingTxnsSlice.actions

export default pendingTxnsSlice.reducer
