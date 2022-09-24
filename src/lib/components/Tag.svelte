<script lang="ts">
    export let ativa = false;
</script>

<div class="tag"
    class:ativa>
    <slot />
</div>

<style>
    .tag {
        height: 48px;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        color: var(--cor-texto-principal);
        background-color: var(--cinza);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ativa{
        color: var(--branco);
        background-color: var(--laranja);
    }
</style>
