<script lang="ts">
    import "./../app.css";
    import MinhaLista from "$components/MinhaLista.svelte";
    import Titulo from "$components/Titulo.svelte";
    import Categoria from "$components/Categoria.svelte";
    import Tag from "$components/Tag.svelte";
    import { minhaLista } from "$lib/stores/minhaLista";

    import categorias from "$lib/json/categorias.json";
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

{#if $minhaLista.length}
    <div class="minha-lista-container">
        <MinhaLista />

        <div class="divisoria" />
    </div>
{/if}
<main>
    <Titulo tag="h1">Ingredientes</Titulo>
    <div class="info">
        <p>
            Selecione abaixo os ingredientes que você deseja usar nesta
            refeição:
        </p>
        <p>
            *Atenção: consideramos que você tenha em casa sal, pimenta e
            água.
        </p>
    </div>

    <ul class="categorias">
        {#each categorias as categoria (categoria.nome)}
            <li>
                <Categoria
                    {categoria}
                />
            </li>
        {/each}
    </ul>

    <div class="buscar-receitas">
        <a href="/receitas">
            <Tag ativa tamanho="lg">Buscar Receitas</Tag>
        </a>
    </div>
</main>

<style>

    .minha-lista-container {
        margin-bottom: 2rem;
    }

    .divisoria {
        width: 40vw;
        height: 2px;
        background-color: var(--verde);
        margin: 0 auto;
    }

    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .categorias {
        margin-bottom: 4.6875rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .buscar-receitas {
        display: flex;
        justify-content: center;
    }
</style>
