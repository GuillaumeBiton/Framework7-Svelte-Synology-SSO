<script>
    import {
        Button,
        Block,
        Toggle
    } from 'framework7-svelte'

    let status
    let access_token
    let checked

    const initSSO = () => {
        SYNOSSO.init({
            oauthserver_url: 'https://brt2600-2.synology.me:64515',
            app_id: 'fed9ec5aec87bd95ca7a5cc153d8e504',
            redirect_uri: 'https://guillaumebiton.github.io/Framework7-Svelte-Synology-SSO/index.html',
            callback: authCallback 
        })
    }
    const signIn = () => {
        SYNOSSO.login()
    }

    const authCallback = (res) => {
        status = res.status
        access_token = res.access_token
        if (access_token) checked = 'checked'
    }
    
</script>

<svelte:head>
    <script src="https://brt2600-2.synology.me:64515/webman/sso/synoSSO-1.0.0.js" async defer on:load={initSSO}></script>
</svelte:head>

<Block strong>
    <Button fill onClick={signIn}>Synology SSO Sign In</Button>
</Block>

<Block>
<span>logged in</span>
<Toggle {checked} color="blue"></Toggle>
</Block>