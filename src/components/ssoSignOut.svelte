<script>
    import {
        Button,
        Block
    } from 'framework7-svelte'

    const signOut = () => {
        SYNOSSO.logout()
    }
</script>

<Block>
    <Button fill onClick={signOut}>Sign Out</Button>
</Block>