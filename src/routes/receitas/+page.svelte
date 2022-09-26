<script lang="ts">
    import Receita from "$components/paginas/receitas/Receita.svelte";
    import Titulo from "$components/compartilhados/Titulo.svelte";
    import receitas from "$lib/json/receitas.json";
</script>

<svelte:head>
    <title>Alura Cook | Receitas</title>
</svelte:head>

<main>
    <Titulo tag="h1">Receitas</Titulo>
    <div class="info">
        <p class="verde">Resultados encontrados: 0</p>
        <p>
            Veja as opções de receitas que encontramos com os ingredientes que
            você selecionou
        </p>
    </div>

    <ul class="receitas">
        {#each receitas as receita (receita.nome) }    
            <li>
                <Receita {receita} />
            </li>
        {/each}
    </ul>
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .info > p.verde {
        color: var(--verde);
    }

    .receitas {
        text-align: start;
        margin-bottom: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }
</style>

