<script lang="ts">
    import Tag from "./Tag.svelte";
    let selecionado: boolean = false;
    export let ingrediente: string;
    function aoClicar() {
        selecionado = !selecionado;
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