<script lang="ts">
    import "./../app.css";
    import Titulo from "$components/compartilhados/Titulo.svelte";
    import Categoria from "$components/paginas/index/Categoria.svelte";
    import Tag from "$components/compartilhados/Tag.svelte";

    import categorias from "$lib/json/categorias.json";
    import { beforeNavigate } from "$app/navigation";

    import { minhaLista } from "$lib/stores/minhaLista";

    $: listaVazia = $minhaLista.length === 0;
    beforeNavigate((navigation) => {
        if (listaVazia && navigation.to?.routeId === "receitas") {
            navigation.cancel();
        }
    });
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

<main>
    <Titulo tag="h1">Ingredientes</Titulo>
    <div class="info">
        <p>
            Selecione abaixo os ingredientes que você deseja usar nesta
            refeição:
        </p>
        <p>
            *Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p>
    </div>

    <ul class="categorias">
        {#each categorias as categoria (categoria.nome)}
            <li>
                <Categoria {categoria} />
            </li>
        {/each}
    </ul>

    <div class="buscar-receitas">
        <a href="/receitas">
            <Tag ativa tamanho="lg" desabilitada={listaVazia}
                >Buscar Receitas</Tag
            >
        </a>
    </div>
</main>

<style>
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
