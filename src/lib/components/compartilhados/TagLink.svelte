<script lang="ts">
    import Tag from "./Tag.svelte";
    export let href: string;
    export let desabilitada: boolean = false;
</script>

<a {href}>
    <Tag ativa tamanho="lg" {desabilitada}><slot /></Tag>
</a>
