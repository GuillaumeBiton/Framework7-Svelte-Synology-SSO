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
            app_id: 'ba118b9cd43471c98cfaa0c2fca9a11e',
            redirect_uri: 'https://3000-harlequin-yak-w6u5p860.ws-eu25.gitpod.io/index.html',
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