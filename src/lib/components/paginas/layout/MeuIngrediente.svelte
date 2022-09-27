<script lang="ts">
    import { fade } from "svelte/transition";
    import { minhaLista } from "$lib/stores/minhaLista";
    import Tag from "$components/compartilhados/Tag.svelte";
    export let ingrediente: string;

    function removerIngrediente() {
        minhaLista.removerIngrediente(ingrediente);
    }
</script>

<div class="meu-ingrediente-container" transition:fade={{ duration: 200 }}>
    <button class="close" on:click={removerIngrediente} />
    <Tag ativa>{ingrediente}</Tag>

    <span class="remover" on:click={removerIngrediente}>Remover</span>
</div>

<style>
    .meu-ingrediente-container {
        position: relative;
    }

    .close {
        background-image: url("/icones/close.svg");
        height: 10px;
        width: 10px;
        cursor: pointer;

        position: absolute;
        top: 4px;
        right: 4px;
    }

    .remover {
        line-height: 24px;
        font-size: 0.875rem;
        color: var(--laranja);
        cursor: pointer;
    }
</style>
