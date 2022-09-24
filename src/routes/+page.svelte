<script lang="ts">
    import "./../app.css";
    import Cabecalho from "$components/Cabecalho.svelte";
    import MinhaLista from "$components/MinhaLista.svelte";
</script>

<svelte:head>
    <title>Alura Cook</title>
</svelte:head>

<div class="container-principal">
    <Cabecalho />
    <div class="estilo-principal">
        <div class="minha-lista-container">
            <MinhaLista />
        </div>
    </div>
</div>

<style>
    .container-principal {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .estilo-principal {
        text-align: center;
        padding: 0 5vw 3.375rem;
        flex: 1;
    }

    .minha-lista-container {
        margin-bottom: 2rem;
    }
</style>
