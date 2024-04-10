import { resolve } from 'node:path'

export default {
    build: {
        emptyOutDir:true,
        rollupOptions: {
            input: {
                juegoMarioKart: resolve('pages/juegoMarioKart.html'),
                juegoMortalKombat: resolve('pages/juegoMortalKombat.html'),
                index: resolve ('index.html')
            }
        }
    }
}