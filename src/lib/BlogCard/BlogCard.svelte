<script>
    export let path = "";
    export let title = "";
    export let description = "";
    export let thumbnail = "";
</script>

<a class="blog-card" href="/blog/{path.replace(/\.[^/.]+$/, "")}" {...$$restProps}>
    <img class="thumbnail" src={thumbnail} alt="{title} thumbnail" />
    <div class="card-body">
        <h5>{title}</h5>
        <span>{description}</span>
    </div>
    <slot />
</a>

<style src="./BlogCard.scss"></style>