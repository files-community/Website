<script lang="ts">
    export let path = "";
    export let date = "";
    export let author = "";
    export let title = "";
    export let description = "";
    export let thumbnail = "";
</script>

<a class="blog-card" href="/blog/{path.replace(/\.[^/.]+$/, "")}" {...$$restProps}>
    <img class="thumbnail" src={thumbnail} alt="{title} thumbnail" />
    <div class="body">
        <h5>{title}</h5>
        <span>{description}</span>
    </div>
    <footer>
        <img src="https://github.com/{author}.png" loading="lazy" alt="{author} avatar" />
        <div class="post-info">
            <object aria-label="Author link">
                <a
                    href="https://github.com/{author}"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {author}
                </a>
            </object>
            <span>{new Date(date).toLocaleDateString("en-US", {
                year: 'numeric', day: "numeric", month: 'short'
            })}</span>
        </div>
        
    </footer>
    <slot />
</a>

<style src="./BlogCard.scss"></style>