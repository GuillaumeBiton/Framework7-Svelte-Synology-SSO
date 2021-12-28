<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavTitle sliding>F7S-Synology-SSO</NavTitle>
    <NavTitleLarge>F7S-Synology-SSO</NavTitleLarge>
  </Navbar>
  
  <!-- Page content -->
  <SSOSignIn></SSOSignIn>
  <SSOSignOut></SSOSignOut>
  
</Page>
<script>
  import {
    Page,
    Navbar,
    NavTitle,
    NavTitleLarge,
  } from 'framework7-svelte';

  import SSOSignIn from '../components/ssoSignIn.svelte'
  import SSOSignOut from '../components/ssoSignOut.svelte'
</script>