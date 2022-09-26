import { writable } from "svelte/store";

const { set, subscribe, update } = writable<string[]>([]);

export const minhaLista = {
    set, 
    subscribe,
    adicionarIngrediente(ingrediente:string){
        update((valorAtual)=>[...valorAtual,ingrediente]);
    },
    removerIngrediente(ingrediente:string){
        update((valorAtual)=>valorAtual.filter((item) => item !== ingrediente));
    }
}