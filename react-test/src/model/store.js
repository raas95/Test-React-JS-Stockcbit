import create from 'zustand'

export const detailContext = create( set => ({
  detailStore : {}, 
  setDetailStore : param => set (() => ({detailStore:param})),
 
})) 
 
