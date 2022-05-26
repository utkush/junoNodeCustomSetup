// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CosmosContractsJunoCosmosContractsJunoMint from './CosmosContracts/juno/CosmosContracts.juno.mint'


export default { 
  CosmosContractsJunoCosmosContractsJunoMint: load(CosmosContractsJunoCosmosContractsJunoMint, 'CosmosContracts.juno.mint'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
