<script lang="ts">
    import { minhaLista } from "$lib/stores/minhaLista";
    import Tag from "./Tag.svelte";

    let selecionado: boolean = false;
    export let ingrediente: string;

    function aoClicar() {
        selecionado = !selecionado;

        if (selecionado) {
            minhaLista.adicionarIngrediente(ingrediente);
        } else {
            minhaLista.removerIngrediente(ingrediente);
        }
    }
</script>

<button on:click={aoClicar}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
    button {
        cursor: pointer;
    }
</style>
