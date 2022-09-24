<script lang="ts">
    import type ICategoria from "$lib/interfaces/ICategoria";
    import IngredienteSelecionavel from "./IngredienteSelecionavel.svelte";
    export let categoria: ICategoria;
</script>

<div class="categoria-container">
    <img
        src="/icones/categorias_ingredientes/{categoria.imagem}"
        alt={categoria.nome}
        class="categoria-imagem"
    />

    <h3 class="categoria-nome">{categoria.nome}</h3>
    <ul class="ingredientes">
        {#each categoria.ingredientes as ingrediente (ingrediente)}
            <li>
                <IngredienteSelecionavel {ingrediente} />
            </li>
        {/each}
    </ul>
</div>

<style>
    .categoria-container {
        width: 300px;
        min-height: 100%;
        background: var(--branco);
        box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
        padding: 0.75rem 0.5rem;
    }

    .categoria-imagem {
        margin-bottom: 0.5rem;
    }

    .categoria-nome {
        font-size: 1.125rem;
        color: var(--verde);
        margin-bottom: 0.875rem;
    }

    .ingredientes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem 1rem;
    }
</style>
